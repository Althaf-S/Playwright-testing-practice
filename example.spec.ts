// @ts-check
import { test, expect } from '@playwright/test';


test('get started link', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.getByRole('link', { name: 'amazon.in' }).click();

  await page.getByRole('link', {name : 'Mobiles'}).click();

  await expect(page).toHaveURL("https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles");
});

test('Search bar testing',async({page}) => {

  await page.goto("https://www.amazon.in/");

  await page.fill('input[placeholder="Search Amazon.in"]',"iqoo 7");

  await page.click('input[id = "nav-search-submit-button"][type="submit"]');

  await expect(page).toHaveTitle("Amazon.in : iqoo 7")

})

test('menu bar',async({page}) => {

  await page.goto("https://www.amazon.in/")

  const menuBar = await page.$('.hm-icon-label');

  await menuBar.click();

  await expect(page.url).toContain('Best Sellers')
})