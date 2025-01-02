"use strict";

var _require = require('@cucumber/cucumber'),
    Given = _require.Given,
    When = _require.When,
    Then = _require.Then;

Given('checking demo', function () {
  console.log('Test started');
});
When('print some message', function () {
  console.log('Test is running');
});
Then('result values', function () {
  console.log('Test passed');
});
Given('I have the login endpoint {string}', function (s) {// Write code here that turns the phrase above into concrete actions
});
Given('I have the following login credentials:', function () {// Write code here that turns the phrase above into concrete actions
});
When('I create a book with the following details:', function () {// Write code here that turns the phrase above into concrete actions
});