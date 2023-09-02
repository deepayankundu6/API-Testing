Feature: To test the API CRUD operations

    Scenario: Get all employee details
        Given I make a get all call
        When The call completes
        Then I get all the data returned from the API
        And I wait for "10" seconds before next call

    Scenario Outline: Get employee details by employee id
        Given I make a get all call with emp id as "<emp_id>"
        When The call completes
        Then I get the employee details for the emp no "<emp_id>"
        And I wait for "10" seconds before next call
        Examples:
            | emp_id |
            | 1      |

    Scenario Outline: Create a new employee
        Given I make a create call with employee details
            | name   | <Name>   |
            | salary | <Salary> |
            | age    | <Age>    |
        When The call completes
        Then The new employee gets created
        And I wait for "10" seconds before next call
        Examples:
            | Name | Salary | Age |
            | test | 1123   | 29  |

    Scenario Outline: Update an employee details
        Given I make a update call for employee "<id>" with details
            | name   | <Name>   |
            | salary | <Salary> |
            | age    | <Age>    |
        When The call completes
        Then The employee "<id>" gets updated
        And I wait for "10" seconds before next call
        Examples:
            | Name | Salary | Age | id |
            | test | 1123   | 29  | 21 |

    Scenario Outline: Delete an employee
        Given I make a delete call with emp id as "<emp_id>"
        When The call completes
        Then I get the success response
        Examples:
            | emp_id |
            | 2      |