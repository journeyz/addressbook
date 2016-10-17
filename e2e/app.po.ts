export class AddressbookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('addressbook-app h1')).getText();
  }
}
