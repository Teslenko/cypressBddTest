Feature: Dashboard Project Page

  Background:
    Given I'am a visit to "login" page and login

  Scenario: DPP-1 Open endpoint "codefresh-v2-e2e..." organization
    When Go to Endpoint "https://g.codefresh.io/2.0/"
    Then Dashboard page will be displayed
    And Click to drop-down button
    Then Check that organization "codefresh-v2-e2e-managed-runtime-dummy" are displayed

  Scenario: DPP-2 Organization change functionality
    When Go to Endpoint "https://g.codefresh.io/2.0/"
    Then Dashboard page will be displayed
    And Click to drop-down button
    Then Check that organization "codefresh-v2-e2e-managed-runtime-dummy" are displayed
    Then Check that organization "codefresh-v2-e2e-playground-dummy" are displayed
    And Click to organization "codefresh-v2-e2e-playground-dummy"
    Then Dashboard page will be displayed
    Then Dashboard page with data will be displayed
    When Click to drop-down button
    And Click to organization "codefresh-v2-e2e-managed-runtime-dummy"
    Then Dashboard page with data will be displayed
