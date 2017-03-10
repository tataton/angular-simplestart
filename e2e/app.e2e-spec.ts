import { Angular2SimplestartPage } from './app.po';

describe('angular2-simplestart App', () => {
  let page: Angular2SimplestartPage;

  beforeEach(() => {
    page = new Angular2SimplestartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
