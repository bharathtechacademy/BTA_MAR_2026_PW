Feature: Git Repository API Validations
    As a user, I want to validate all the Git repository-related API validations in this feature file.

    Background: Initialize the API request context.
        Given Initialize the API request context

    Scenario: Validate request to create a duplicate repository
        When I send a "POST" request with endpoint "/user/repos" to create a repository with the name "JMeterRepo2" and description "This is a duplicate repo"
        Then I should receive a response with status code 422
        And I should receive a response with status message "Unprocessable Entity"
        And I should receive a response with body having "message" as "Repository creation failed."

    Scenario: Validate request to create a valid repository
        When I send a "POST" request with endpoint "/user/repos" to create a repository with the name "JMeterRepo5" and description "This is a valid repo"
        Then I should receive a response with status code 201
        And I should receive a response with status message "Created"
        And I should receive a response with body having "name" as "JMeterRepo5"

    Scenario: Validate request to get a valid repository
        When I send a "GET" request with endpoint "/repos/bharathtechacademy05/JMeterRepo5" to get the repository
        Then I should receive a response with status code 200
        And I should receive a response with status message "OK"
        And I should receive a response with body having "name" as "JMeterRepo5"

    Scenario: Validate request to update a valid repository
        When I send a "PATCH" request with endpoint "/repos/bharathtechacademy05/JMeterRepo5" to update the repository description "This is an updated repo"
        Then I should receive a response with status code 200
        And I should receive a response with status message "OK"
        And I should receive a response with body having "description" as "This is an updated repo"

    Scenario: Validate request to delete repository
        When I send a "DELETE" request with endpoint "/repos/bharathtechacademy05/JMeterRepo5" to delete the repository
        Then I should receive a response with status code 204
        And I should receive a response with status message "No Content"
