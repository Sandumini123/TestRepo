 @cart
Feature: Cart functionality

  Scenario: Display all phones
    Given I am on the home page
    When I select the "Phones" category
    Then I should see all phones displayed

Scenario: Add product to cart
    Given I am on the home page
    When I select a product
    And I am navigated to the product page
    And I click the "Add to cart" button
    Then I should see a success message "Product added"