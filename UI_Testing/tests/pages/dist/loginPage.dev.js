"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// loginPage.js
var _require = require('@playwright/test'),
    chromium = _require.chromium;

var loginLocators = require('../locators/loginLocators');

var LoginPage =
/*#__PURE__*/
function () {
  function LoginPage() {
    _classCallCheck(this, LoginPage);

    this.browser = null;
    this.page = null;
  }

  _createClass(LoginPage, [{
    key: "launchBrowser",
    value: function launchBrowser() {
      var context;
      return regeneratorRuntime.async(function launchBrowser$(_context) {
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
              _context.next = 6;
              return regeneratorRuntime.awrap(this.browser.newContext());

            case 6:
              context = _context.sent;
              _context.next = 9;
              return regeneratorRuntime.awrap(context.newPage());

            case 9:
              this.page = _context.sent;
              console.log('Browser launched');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    } // loginPage.js

  }, {
    key: "navigateToUrl",
    value: function navigateToUrl(url) {
      return regeneratorRuntime.async(function navigateToUrl$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.page["goto"](url, {
                timeout: 100000
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "openLoginModal",
    value: function openLoginModal() {
      return regeneratorRuntime.async(function openLoginModal$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(this.page.click(loginLocators.loginButton));

            case 2:
              _context3.next = 4;
              return regeneratorRuntime.awrap(this.page.waitForSelector(loginLocators.loginModal));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "enterCredentials",
    value: function enterCredentials(username, password) {
      return regeneratorRuntime.async(function enterCredentials$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.page.fill(loginLocators.usernameInput, username));

            case 2:
              _context4.next = 4;
              return regeneratorRuntime.awrap(this.page.fill(loginLocators.passwordInput, password));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "submitLogin",
    value: function submitLogin() {
      return regeneratorRuntime.async(function submitLogin$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.page.click(loginLocators.loginSubmitButton));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "verifyLoginSuccess",
    value: function verifyLoginSuccess(username) {
      var userGreeting;
      return regeneratorRuntime.async(function verifyLoginSuccess$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(this.page.waitForSelector(loginLocators.userGreeting, {
                timeout: 10000
              }));

            case 2:
              _context6.next = 4;
              return regeneratorRuntime.awrap(this.page.textContent(loginLocators.userGreeting));

            case 4:
              userGreeting = _context6.sent;

              if (userGreeting.includes("Welcome ".concat(username))) {
                _context6.next = 7;
                break;
              }

              throw new Error('Login failed or greeting not found');

            case 7:
              console.log('Login successful!');

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "closeBrowser",
    value: function closeBrowser() {
      return regeneratorRuntime.async(function closeBrowser$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(this.browser.close());

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }]);

  return LoginPage;
}();

module.exports = new LoginPage();