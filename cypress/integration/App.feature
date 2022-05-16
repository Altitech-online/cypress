Feature: Open app


  I want to open the app

  

  @smoke

  Scenario: Opening the app

    Given I open the app

    Then I see "Hello" in the h1

  @type

  Scenario: Displaying input text

    Given I typed "Hello world"

    When I click the button

    Then I see "Hello world" in the paragraph   