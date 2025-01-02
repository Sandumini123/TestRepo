"use strict";

var _require = require('@cucumber/cucumber'),
    Before = _require.Before,
    After = _require.After;

var _require2 = require('playwright'),
    chromium = _require2.chromium;

var browser;
var page;
Before(function _callee() {
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
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context.sent;
          this.page = page; // Attach the page to the context

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});
After(function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(browser.close());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = {
  browser: browser,
  page: page
};