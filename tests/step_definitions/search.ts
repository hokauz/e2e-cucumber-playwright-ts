import { When, Then, Given }  from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { page } from '../_configs';
import { URLs } from '../_consts';

const checks = {}

Given('usuário entrando no site do google', async function () {
  await page.goto(URLs.home);
});

Then('o usuário verá um campo de input', async function () {
  const input = page.locator('input').first();
  await expect(input).toHaveAttribute('title', 'Pesquisar');
});
