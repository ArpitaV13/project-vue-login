import { test, expect } from '@playwright/test';

test('should be able to login', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.fill('input[type="email"]', 'email@gmail.com');
  await page.fill('input[type="password"]', 'password');

  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForLoadState('networkidle')
  ]);

  expect(page.url()).toBe('http://localhost:5173/');
});
