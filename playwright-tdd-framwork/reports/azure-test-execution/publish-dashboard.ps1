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
  $map[$parts[0].Trim()] = $parts[1].Trim()
}

$orgUrl = $map['AZURE_ORG_URL']
$projectName = $map['AZURE_PROJECT_NAME']
$pat = $map['AZURE_PAT']
$orgBase = [regex]::Match($orgUrl, '^https://dev\.azure\.com/[^/]+').Value
$projectEncoded = [uri]::EscapeDataString($projectName)
$basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(':' + $pat))
$headers = @{ Authorization = "Basic $basic"; 'Content-Type' = 'application/json' }

$dataJson = & (Join-Path $root 'reports\azure-test-execution\build-dashboard-data.ps1')
$data = $dataJson | ConvertFrom-Json
if (-not $data.ok) {
  throw "Unable to build dashboard data: $($data.message)"
}

$dashboardName = 'Auto Test Execution Dashboard'
$listUrl = "$orgBase/$projectEncoded/_apis/dashboard/dashboards?api-version=7.1-preview.3"
$list = Invoke-RestMethod -Uri $listUrl -Headers $headers -Method Get
$dashboard = $list.value | Where-Object { $_.name -eq $dashboardName } | Select-Object -First 1

if (-not $dashboard) {
  $createBody = @{ name = $dashboardName; description = 'Auto-generated suite execution summary' } | ConvertTo-Json
  $dashboard = Invoke-RestMethod -Uri $listUrl -Headers $headers -Method Post -Body $createBody
}

$dashId = $dashboard.id
$runUrl = $data.runUrl
$suiteUrl = $data.suiteUrl
$dashboardUrl = "$orgBase/$projectEncoded/_dashboards/dashboard/$dashId"

$topReasons = @()
if ($data.failedTests -and $data.failedTests.Count -gt 0) {
  $topReasons = $data.failedTests | Select-Object -First 10 | ForEach-Object {
    "- TC $($_.testCaseId): $($_.failureReason)"
  }
} else {
  $topReasons = @('- No failed tests in selected run.')
}

$widgetsUrl = "$orgBase/$projectEncoded/_apis/dashboard/dashboards/$dashId/widgets?api-version=7.1-preview.2"

# Remove previously generated suite widgets to keep the dashboard clean and aligned.
$existingWidgets = Invoke-RestMethod -Uri $widgetsUrl -Headers $headers -Method Get
if ($existingWidgets.value) {
  $toDelete = $existingWidgets.value | Where-Object {
    $_.name -like 'Suite 1330*' -or $_.name -like 'Auto Suite 1330*'
  }
  foreach ($w in $toDelete) {
    $deleteUrl = "$orgBase/$projectEncoded/_apis/dashboard/dashboards/$dashId/widgets/$($w.id)?api-version=7.1-preview.2"
    [void](Invoke-RestMethod -Uri $deleteUrl -Headers $headers -Method Delete)
  }
}

$summaryMarkdown = @"
## Auto Suite 1330 - Run $($data.runId)

Plan: **$($data.planId)**  
Suite: **$($data.suiteId)**  
Owner: **$($data.runOwner)**  
State: **$($data.runState)**

### KPIs
- Total: **$($data.totalInSuite)**
- Passed: **$($data.passed)**
- Failed: **$($data.failed)**
- Not Executed: **$($data.notExecuted)**
- Blocked: **$($data.blocked)**
- Pass Rate: **$($data.passRate)%**

### Quick Links
- [Run Details]($runUrl)
- [Suite Execution]($suiteUrl)
"@

$outcomeMarkdown = @"
## Outcome Distribution

| Outcome | Count |
|---|---:|
| Passed | $($data.passed) |
| Failed | $($data.failed) |
| Not Executed | $($data.notExecuted) |
| Blocked | $($data.blocked) |

Pass Rate: **$($data.passRate)%**
"@

$recentRows = @()
if ($data.recentCompleted -and $data.recentCompleted.Count -gt 0) {
  $recentRows = $data.recentCompleted | Select-Object -First 8 | ForEach-Object {
    "| $($_.testCaseId) | $($_.outcome) | $($_.completedDate) |"
  }
} else {
  $recentRows = @('| - | - | - |')
}

$detailsMarkdown = @"
## Failures And Recent Tests

### Top Failure Reasons
$($topReasons -join "`n")

### Recently Completed
| Test Case | Outcome | Completed |
|---:|---|---|
$($recentRows -join "`n")
"@

$widgetsToCreate = @(
  @{
    name = 'Auto Suite 1330 Summary'
    position = @{ row = 1; column = 1 }
    size = @{ rowSpan = 2; columnSpan = 2 }
    settings = $summaryMarkdown
  },
  @{
    name = 'Auto Suite 1330 Outcomes'
    position = @{ row = 1; column = 3 }
    size = @{ rowSpan = 2; columnSpan = 2 }
    settings = $outcomeMarkdown
  },
  @{
    name = 'Auto Suite 1330 Details'
    position = @{ row = 3; column = 1 }
    size = @{ rowSpan = 2; columnSpan = 4 }
    settings = $detailsMarkdown
  }
)

foreach ($widget in $widgetsToCreate) {
  $body = @{
    name = $widget.name
    position = $widget.position
    size = $widget.size
    contributionId = 'ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.MarkdownWidget'
    settings = $widget.settings
  } | ConvertTo-Json -Depth 8
  [void](Invoke-RestMethod -Uri $widgetsUrl -Headers $headers -Method Post -Body $body)
}

[pscustomobject]@{
  planId = $data.planId
  suiteId = $data.suiteId
  runId = $data.runId
  total = $data.totalInSuite
  passed = $data.passed
  failed = $data.failed
  notExecuted = $data.notExecuted
  blocked = $data.blocked
  passRate = $data.passRate
  runOwner = $data.runOwner
  runState = $data.runState
  runStartedDate = $data.runStartedDate
  runCompletedDate = $data.runCompletedDate
  dashboardId = $dashId
  dashboardUrl = $dashboardUrl
  runUrl = $runUrl
  suiteUrl = $suiteUrl
  failedTests = $data.failedTests
  recentCompleted = $data.recentCompleted
} | ConvertTo-Json -Depth 8