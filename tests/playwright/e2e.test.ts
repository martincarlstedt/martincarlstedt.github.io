import { expect, test } from '@playwright/test'

test('should show posts on home page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Hello world')
  await expect(page).toHaveURL('/posts/hello-world')
})

test('should navigate to post', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Hello world')
  await page.getByText('Insert catch phrase here')
  await page.getByText('4 Mar, 2023')
})

test('should show post', async ({ page }) => {
  await page.goto('/posts/hello-world')
  await page.getByText('logger.info')
})
