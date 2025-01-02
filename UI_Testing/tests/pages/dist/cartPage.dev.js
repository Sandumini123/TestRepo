"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('chai'),
    expect = _require.expect;

var locators = require('../locators/cartLocators');

var CartPage =
/*#__PURE__*/
function () {
  function CartPage(page) {
    _classCallCheck(this, CartPage);

    this.page = page; // Assign page object to this.page
  } // Open the home page


  _createClass(CartPage, [{
    key: "openHomePage",
    value: function openHomePage() {
      return regeneratorRuntime.async(function openHomePage$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.page["goto"](locators.homePageUrl));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    } // Click the Phones category

  }, {
    key: "clickPhonesCategory",
    value: function clickPhonesCategory() {
      return regeneratorRuntime.async(function clickPhonesCategory$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('Waiting for Phones category to be visible...');
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.page.waitForSelector(locators.phonesCategory, {
                state: 'visible',
                timeout: 15000
              }));

            case 3:
              console.log('Phones category is visible, clicking...');
              _context2.next = 6;
              return regeneratorRuntime.awrap(this.page.click(locators.phonesCategory));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    } // Verify that the title of the page matches the expected title
    // async verifyPhonesTitle(Phones) {
    //   const title = await this.page.textContent(locators.phonesTitle);
    //   expect(title).to.include(Phones);
    // }
    // Verify that the title of the page matches the expected title

  }, {
    key: "verifyPhonesTitle",
    value: function verifyPhonesTitle(expectedTitle) {
      var titleElement, title;
      return regeneratorRuntime.async(function verifyPhonesTitle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('Waiting for the title to appear...');
              _context3.next = 3;
              return regeneratorRuntime.awrap(this.page.waitForSelector('.title', {
                state: 'visible',
                timeout: 15000
              }));

            case 3:
              titleElement = _context3.sent;
              _context3.next = 6;
              return regeneratorRuntime.awrap(titleElement.textContent());

            case 6:
              title = _context3.sent;
              // Get the title text
              console.log("Title found: ".concat(title));
              expect(title.trim()).to.include(expectedTitle); // Verify the title

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "selectProduct",
    value: function selectProduct() {
      return regeneratorRuntime.async(function selectProduct$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('Selecting the first product...');
              _context4.next = 3;
              return regeneratorRuntime.awrap(this.page.waitForSelector(locators.productLink, {
                state: 'visible',
                timeout: 15000
              }));

            case 3:
              _context4.next = 5;
              return regeneratorRuntime.awrap(this.page.click(locators.productLink));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    } // Click the "Add to cart" button on the product page

  }, {
    key: "clickAddToCartButton",
    value: function clickAddToCartButton() {
      return regeneratorRuntime.async(function clickAddToCartButton$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log('Clicking the "Add to cart" button...');
              _context5.next = 3;
              return regeneratorRuntime.awrap(this.page.waitForSelector(locators.addToCartButton, {
                state: 'visible',
                timeout: 15000
              }));

            case 3:
              _context5.next = 5;
              return regeneratorRuntime.awrap(this.page.click(locators.addToCartButton));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    } // Get the current page URL

  }, {
    key: "getCurrentUrl",
    value: function getCurrentUrl() {
      return regeneratorRuntime.async(function getCurrentUrl$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(this.page.url());

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    } // Accept the browser alert (success message after adding to cart)

  }, {
    key: "acceptAlert",
    value: function acceptAlert() {
      var alertMessage;
      return regeneratorRuntime.async(function acceptAlert$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(this.page.waitForEvent('dialog', {
                timeout: 5000
              }));

            case 2:
              alertMessage = _context7.sent;
              console.log("Alert message: ".concat(alertMessage.message()));
              _context7.next = 6;
              return regeneratorRuntime.awrap(alertMessage.accept());

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }]);

  return CartPage;
}();

module.exports = CartPage;