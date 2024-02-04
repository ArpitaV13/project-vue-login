import { test, expect } from '@playwright/test';

test('should be able to logout from home page', async ({ page }) => {

  await page.goto('http://localhost:5173/home');
  await expect(page.locator('div.container > h2')).toHaveText('Home Page');


  await Promise.all([
    page.click('button'),
    page.waitForLoadState('networkidle')
  ]);

  expect(page.url()).toBe('http://localhost:5173/');

  expect(await page.isVisible('form')).toBeTruthy();
});
