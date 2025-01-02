const { expect } = require('chai');
const locators = require('../locators/cartLocators');

class CartPage {
  constructor(page) {
    this.page = page; // Assign page object to this.page
  }

  // Open the home page
  async openHomePage() {
    await this.page.goto(locators.homePageUrl);
  }

  // Click the Phones category
  async clickPhonesCategory() {
    console.log('Waiting for Phones category to be visible...');
    await this.page.waitForSelector(locators.phonesCategory, { state: 'visible', timeout: 15000 });
    console.log('Phones category is visible, clicking...');
    await this.page.click(locators.phonesCategory);
  }

  // Verify that the title of the page matches the expected title
  // async verifyPhonesTitle(Phones) {
  //   const title = await this.page.textContent(locators.phonesTitle);
  //   expect(title).to.include(Phones);
  // }
  // Verify that the title of the page matches the expected title
async verifyPhonesTitle(expectedTitle) {
  console.log('Waiting for the title to appear...');
  const titleElement = await this.page.waitForSelector('.title', { state: 'visible', timeout: 15000 }); // Wait for title to appear
  const title = await titleElement.textContent(); // Get the title text
  console.log(`Title found: ${title}`);
  expect(title.trim()).to.include(expectedTitle); // Verify the title
}

async selectProduct() {
  console.log('Selecting the first product...');
  await this.page.waitForSelector(locators.productLink, { state: 'visible', timeout: 15000 });
  await this.page.click(locators.productLink); // Click the first product link
}

// Click the "Add to cart" button on the product page
async clickAddToCartButton() {
  console.log('Clicking the "Add to cart" button...');
  await this.page.waitForSelector(locators.addToCartButton, { state: 'visible', timeout: 15000 });
  await this.page.click(locators.addToCartButton);
}

// Get the current page URL
async getCurrentUrl() {
  return await this.page.url();
}

// Accept the browser alert (success message after adding to cart)
async acceptAlert() {
  const alertMessage = await this.page.waitForEvent('dialog', { timeout: 5000 });
  console.log(`Alert message: ${alertMessage.message()}`);
  await alertMessage.accept();
}
}

module.exports = CartPage;
