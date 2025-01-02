"use strict";

var _require = require('@cucumber/cucumber'),
    Given = _require.Given,
    When = _require.When,
    Then = _require.Then;

var _require2 = require('@playwright/test'),
    chromium = _require2.chromium;

var browser;
var page;
Given('Providing valid url', function _callee() {
  var context;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(chromium.launch({
            headless: false
          }));

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(browser.newContext());

        case 5:
          context = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(context.newPage());

        case 8:
          page = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(page["goto"]("https://demoblaze.com/"));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
});
When('Providing valid username and password', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(page.click('#login2'));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(page.waitForSelector('#logInModal'));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(page.fill('#loginusername', 'panvol'));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(page.fill('#loginpassword', 'test@123'));

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
Then('Clicking login button', function _callee3() {
  var userGreeting;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(page.click('button[onclick="logIn()"]'));

        case 2:
          _context3.next = 4;
          return regeneratorRuntime.awrap(page.waitForSelector('#nameofuser', {
            timeout: 10000
          }));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(page.textContent('#nameofuser'));

        case 6:
          userGreeting = _context3.sent;

          if (userGreeting.includes('Welcome panvol')) {
            _context3.next = 9;
            break;
          }

          throw new Error('Login failed or greeting not found');

        case 9:
          console.log('Login successful!');
          _context3.next = 12;
          return regeneratorRuntime.awrap(browser.close());

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
});