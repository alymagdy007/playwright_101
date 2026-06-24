import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await expect(page.getByText('Register Log in Shopping cart (0) Wishlist (0) You have no items in your')).toBeVisible();
  await expect(page.locator('body')).toContainText('Register');
});