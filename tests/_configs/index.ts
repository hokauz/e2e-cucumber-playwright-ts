
import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, BrowserContext, chromium, Browser } from 'playwright';

setDefaultTimeout(60000);

let browser: Browser;
let context: BrowserContext;
let page   : Page;

// launch the browser
BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
});

// close the browser
AfterAll(async function () {
  await browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await page.close();
  await context.close();
});

export { page, context, browser };
