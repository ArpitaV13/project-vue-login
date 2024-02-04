import { test, expect } from '@playwright/test';

test('should be able to register', async ({ page }) => {
  
  await page.goto('http://localhost:5173/register');


  await page.fill('input[type="email"]', 'new-user@example.com');
  await page.fill('input[type="password"]', 'new-password');


  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForLoadState('networkidle'),
  ]);


  expect(page.url()).toBe('http://localhost:5173/home');
});
