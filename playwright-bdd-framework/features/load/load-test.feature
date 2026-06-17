Feature: Git API Load Test Feature
    As a user of the GitHub, I want to validate all the scenarios related to Git API performance.

    Scenario: Validate Git repository API request performance
        Given Initialize the JMeter Utility
        Then Execute the Jmeter Test Plan "LoadTest.jmx" and publish the results
