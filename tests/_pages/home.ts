import { URLs } from '../_consts';

const locators = {
  title: 'h1'
}

class HomePage {
  static open() {
    return global.page.goto(URLs.home);
  }

  static getTitle() {
    return global.page.locator(locators.title).textContent();
  }
}

export { HomePage }
