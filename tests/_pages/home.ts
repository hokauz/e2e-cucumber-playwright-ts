import { URLs } from '../_consts';

class HomePage {
  static open() {
    return global.page.goto(URLs.home);
  }
}

export { HomePage }
