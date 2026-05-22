import { test, expect } from '@playwright/test';

test('SauceDemo Automation Flow', async ({ page }) => {

  // Open Website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click Login
  await page.click('#login-button');

  // Verify Inventory Page
  await expect(page).toHaveURL(/inventory/);

  // Add Product
  await page.click('#add-to-cart-sauce-labs-backpack');

  // Open Cart
  await page.click('.shopping_cart_link');

  // Validate Product
  await expect(page.locator('.inventory_item_name'))
    .toContainText('Sauce Labs Backpack');

  // Take Screenshot
  await page.screenshot({
    path: 'screenshots/cart-page.png',
    fullPage: true
  });

});