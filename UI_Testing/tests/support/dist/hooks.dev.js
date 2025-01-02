"use strict";

// tests/support/hooks.js
var _require = require('@cucumber/cucumber'),
    setDefaultTimeout = _require.setDefaultTimeout; // Set the default timeout globally to 30 seconds (30000 ms) to cover all steps


setDefaultTimeout(30000); // 30 seconds