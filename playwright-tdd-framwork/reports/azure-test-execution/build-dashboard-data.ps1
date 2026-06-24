$ErrorActionPreference = 'Stop'

$root = 'c:\Training\PlaywrightTrainings\Mar_2026\playwright-tdd-framwork'
$envPath = Join-Path $root '.env'
$lines = Get-Content -Path $envPath
$map = @{}
foreach ($line in $lines) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  $t = $line.Trim()
  if ($t.StartsWith('#')) { continue }
  if ($t -notmatch '=') { continue }
  $parts = $t.Split('=', 2)
  $k = $parts[0].Trim()
  $v = $parts[1].Trim()
  $map[$k] = $v
}

$orgUrl = $map['AZURE_ORG_URL']
$projectName = $map['AZURE_PROJECT_NAME']
$pat = $map['AZURE_PAT']

$orgBase = [regex]::Match($orgUrl, '^https://dev\.azure\.com/[^/]+').Value
$projectEncoded = [uri]::EscapeDataString($projectName)
$basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(':' + $pat))
$headers = @{ Authorization = "Basic $basic" }

$planId = 162
$suiteId = 1330

$tpUrl = "$orgBase/$projectEncoded/_apis/testplan/Plans/$planId/Suites/$suiteId/TestPoint?api-version=7.1-preview.2"
$points = $null
try { $points = Invoke-RestMethod -Uri $tpUrl -Headers $headers -Method Get } catch {}
if (-not $points -or -not $points.value -or $points.value.Count -eq 0) {
  $fallbackUrl = "$orgBase/$projectEncoded/_apis/test/Plans/$planId/Suites/$suiteId/points?api-version=7.1"
  $points = Invoke-RestMethod -Uri $fallbackUrl -Headers $headers -Method Get
}

$suiteCases = @()
foreach ($p in $points.value) {
  $tcId = $null
  $title = $null
  $tpId = $null
  if ($p.PSObject.Properties.Name -contains 'testCaseReference') {
    $tcId = [int]$p.testCaseReference.id
    $title = $p.testCaseReference.name
    $tpId = [int]$p.id
  } else {
    $tcId = [int]$p.testCase.id
    $title = $p.testCase.name
    $tpId = [int]$p.id
  }
  if ($tcId) {
    $suiteCases += [pscustomobject]@{
      testCaseId = $tcId
      testCaseTitle = $title
      testPointId = $tpId
    }
  }
}
$suiteCases = $suiteCases | Sort-Object testCaseId -Unique
$caseIdSet = @{}
foreach ($c in $suiteCases) { $caseIdSet[[string]$c.testCaseId] = $true }

$runsUrl = "$orgBase/$projectEncoded/_apis/test/runs?planIds=$planId&api-version=7.1"
$runs = Invoke-RestMethod -Uri $runsUrl -Headers $headers -Method Get
$sortedRuns = @(
  $runs.value |
    Sort-Object {
      if ($_.completedDate) { [datetime]$_.completedDate }
      elseif ($_.startedDate) { [datetime]$_.startedDate }
      elseif ($_.createdDate) { [datetime]$_.createdDate }
      else { [datetime]::MinValue }
    } -Descending
)

$selectedRun = $null
$selectedResults = $null
foreach ($run in $sortedRuns) {
  $runId = $run.id
  $resUrl = "$orgBase/$projectEncoded/_apis/test/runs/$runId/results?api-version=7.1"
  try { $res = Invoke-RestMethod -Uri $resUrl -Headers $headers -Method Get } catch { continue }
  if (-not $res -or -not $res.value) { continue }

  $matched = 0
  foreach ($r in $res.value) {
    $rid = [string]$r.testCase.id
    if ($caseIdSet.ContainsKey($rid)) { $matched++ }
  }

  if ($matched -gt 0) {
    $selectedRun = $run
    $selectedResults = $res.value
    break
  }
}

if (-not $selectedRun) {
  [pscustomobject]@{
    ok = $false
    message = 'No matching run found for suite test cases'
    suiteCaseCount = $suiteCases.Count
    orgBase = $orgBase
    projectEncoded = $projectEncoded
    planId = $planId
    suiteId = $suiteId
  } | ConvertTo-Json -Depth 8
  exit 0
}

$runId = $selectedRun.id
$runDetailUrl = "$orgBase/$projectEncoded/_apis/test/runs/${runId}?api-version=7.1"
$runDetail = Invoke-RestMethod -Uri $runDetailUrl -Headers $headers -Method Get

$resultsInSuite = @()
foreach ($r in $selectedResults) {
  $rid = [string]$r.testCase.id
  if ($caseIdSet.ContainsKey($rid)) { $resultsInSuite += $r }
}

$failedRows = @()
$passed = 0
$failed = 0
$blocked = 0
$notExecFromResults = 0

foreach ($r in $resultsInSuite) {
  $outcome = [string]$r.outcome
  switch -Regex ($outcome) {
    '^Passed$' { $passed++; break }
    '^Failed$' {
      $failed++
      $reason = $null
      if (-not [string]::IsNullOrWhiteSpace($r.errorMessage)) { $reason = $r.errorMessage }
      elseif (-not [string]::IsNullOrWhiteSpace($r.stackTrace)) { $reason = ($r.stackTrace -split "`n")[0] }
      elseif (-not [string]::IsNullOrWhiteSpace($r.comment)) { $reason = $r.comment }
      else { $reason = 'No failure message returned by Azure' }

      $failedRows += [pscustomobject]@{
        resultId = $r.id
        testCaseId = [int]$r.testCase.id
        testCaseTitle = $r.testCaseTitle
        owner = if ($r.owner) { $r.owner.displayName } else { '' }
        outcome = $outcome
        failureReason = $reason
        durationInMs = if ($r.durationInMs) { [int]$r.durationInMs } else { 0 }
        completedDate = $r.completedDate
      }
      break
    }
    '^Blocked$' { $blocked++; break }
    'NotExecuted|Active|Paused|Inconclusive|Timeout|Aborted|Error|NotApplicable' { $notExecFromResults++; break }
    default { $notExecFromResults++; break }
  }
}

$totalInSuite = $suiteCases.Count
$notExecuted = [Math]::Max(0, $totalInSuite - ($passed + $failed + $blocked))
if ($notExecFromResults -gt $notExecuted) { $notExecuted = $notExecFromResults }
$passRate = if ($totalInSuite -gt 0) { [Math]::Round(($passed / $totalInSuite) * 100, 2) } else { 0 }

$durationMsTotal = 0
foreach ($r in $resultsInSuite) {
  if ($r.durationInMs) { $durationMsTotal += [int]$r.durationInMs }
}

$latestCompleted = @(
  $resultsInSuite |
    Where-Object { $_.completedDate } |
    Sort-Object { [datetime]$_.completedDate } -Descending |
    Select-Object -First 10 |
    ForEach-Object {
      [pscustomobject]@{
        testCaseId = [int]$_.testCase.id
        testCaseTitle = $_.testCaseTitle
        outcome = $_.outcome
        durationInMs = if ($_.durationInMs) { [int]$_.durationInMs } else { 0 }
        completedDate = $_.completedDate
        owner = if ($_.owner) { $_.owner.displayName } else { '' }
      }
    }
)

$runUrl = "$orgBase/$projectEncoded/_TestManagement/runs?runId=$runId"
$suiteUrl = "$orgBase/$projectEncoded/_testPlans/execute?planId=$planId&suiteId=$suiteId"

[pscustomobject]@{
  ok = $true
  orgBase = $orgBase
  projectEncoded = $projectEncoded
  planId = $planId
  suiteId = $suiteId
  runId = [int]$runId
  runName = $selectedRun.name
  runState = $selectedRun.state
  runCompletedDate = $selectedRun.completedDate
  runStartedDate = $selectedRun.startedDate
  runOwner = if ($runDetail.owner) { $runDetail.owner.displayName } else { '' }
  totalInSuite = $totalInSuite
  passed = $passed
  failed = $failed
  blocked = $blocked
  notExecuted = $notExecuted
  passRate = $passRate
  executionDurationMs = $durationMsTotal
  runUrl = $runUrl
  suiteUrl = $suiteUrl
  failedTests = $failedRows
  recentCompleted = $latestCompleted
} | ConvertTo-Json -Depth 8