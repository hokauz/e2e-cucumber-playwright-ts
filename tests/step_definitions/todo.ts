import { When, Then, Given }  from '@cucumber/cucumber';
import { HomePage }  from '../_pages/home';

import { expect } from '@playwright/test';

const checks = {}

Given('usuário entrando no site pela página home', async function () {
  await HomePage.open();
});

When('quando a página carregar', async function () {
  checks['title'] = await HomePage.getTitle();
});

Then('deve existir um título', async function () {
  await expect(checks['title']).toBeDefined();
});

Then('o título deve ser {string}', async function (title) {
  await expect(checks['title']).toBe(title);
});