const { When, Then, Given }  = require('@cucumber/cucumber');
const { HomePage } = require('../_pages/home');

const { expect } = require('@playwright/test');

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