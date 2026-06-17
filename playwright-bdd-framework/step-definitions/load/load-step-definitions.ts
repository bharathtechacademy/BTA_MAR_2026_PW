import { Given, When, Then } from '@cucumber/cucumber';
import { JMeterCommons } from '../../commons/jmeter/jmeter-commons.ts';

let jmeter: JMeterCommons;

//Given Initialize the JMeter Utility
Given('Initialize the JMeter Utility', function () {
    jmeter = new JMeterCommons();
});

//Then Execute the Jmeter Test Plan "LoadTest.jmx" and publish the results
Then('Execute the Jmeter Test Plan {string} and publish the results', function (testplan: string) {
    jmeter.runJMeterTestPlan(testplan);
})