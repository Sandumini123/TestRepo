const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  
  reporter: 'html',

  use: { 
    baseURL: 'http://localhost:7081',
    //extraHTTPHeaders: {
      /*'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
  /},*/

    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  /*projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    
  ],*/

});

