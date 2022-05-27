import { When, Then, Given }  from '@cucumber/cucumber';
import { Greeter }  from '../../src/index';
import { HomePage }  from '../_pages/home';

import { expect } from '@playwright/test';

Given('a test', async function () {
  await HomePage.open()
});

When('the greeter says hello', function () {
  this.whatIHeard = Greeter.sayHello()
});

Then('I should have heard {string}', function (expectedResponse) {
  expect(this.whatIHeard).toBe(expectedResponse)
});