const { Given, When, Then } = require('@cucumber/cucumber');

Given('checking demo', function () {
  console.log('Test started');
});

When('print some message', function () {
  console.log('Test is running');
});

Then('result values', function () {
  console.log('Test passed');
});

Given('I have the login endpoint {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

Given('I have the following login credentials:', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('I create a book with the following details:', () => {
  // Write code here that turns the phrase above into concrete actions
})


