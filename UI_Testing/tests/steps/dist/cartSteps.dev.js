"use strict";

var _require = require('@cucumber/cucumber'),
    Given = _require.Given,
    When = _require.When,
    Then = _require.Then,
    setWorldConstructor = _require.setWorldConstructor;

var _require2 = require('chai'),
    expect = _require2.expect;

var _require3 = require('playwright'),
    chromium = _require3.chromium;

var CartPage = require('../pages/cartPage'); // World constructor to set up Playwright's browser and page


setWorldConstructor(function () {
  this.browser = null;
  this.page = null;
  this.cartPage = null;
});
Given('I am on the home page', {
  timeout: 20000
}, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Launching browser...');
          _context.next = 3;
          return regeneratorRuntime.awrap(chromium.launch({
            headless: false
          }));

        case 3:
          this.browser = _context.sent;
          console.log('Opening new page...');
          _context.next = 7;
          return regeneratorRuntime.awrap(this.browser.newPage());

        case 7:
          this.page = _context.sent;
          this.cartPage = new CartPage(this.page);
          console.log('Navigating to home page...');
          _context.next = 12;
          return regeneratorRuntime.awrap(this.cartPage.openHomePage());

        case 12:
          console.log('Home page loaded.');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});
When('I select the {string} category', function _callee2(category) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(category === 'Phones')) {
            _context2.next = 4;
            break;
          }

          console.log('Clicking on Phones category...');
          _context2.next = 4;
          return regeneratorRuntime.awrap(this.cartPage.clickPhonesCategory());

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
});
Then('I should see all phones displayed', function _callee3() {
  var phoneItems;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('Waiting for the list of phones to appear...');
          _context3.next = 3;
          return regeneratorRuntime.awrap(this.page.$$('div#tbodyid .card-title'));

        case 3:
          phoneItems = _context3.sent;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, null, this);
});
When('I select a product', function _callee4() {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log('Selecting a product...');
          _context4.next = 3;
          return regeneratorRuntime.awrap(this.cartPage.selectProduct());

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  }, null, this);
});
When('I am navigated to the product page', function _callee5() {
  var currentUrl;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(this.cartPage.getCurrentUrl());

        case 2:
          currentUrl = _context5.sent;
          console.log("Current URL: ".concat(currentUrl));
          expect(currentUrl).to.equal('https://demoblaze.com/prod.html?idp_=1');

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  }, null, this);
});
When('I click the "Add to cart" button', function _callee6() {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(this.cartPage.clickAddToCartButton());

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, null, this);
});
Then('I should see a success message {string}', function _callee7(message) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(this.cartPage.acceptAlert());

        case 2:
          console.log('Product successfully added to cart');

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  }, null, this);
});