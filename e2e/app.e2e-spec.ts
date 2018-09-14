import { Angular6Page } from './app.po';

describe('angular6 App', () => {
  let page: Angular6Page;

  beforeEach(() => {
    page = new Angular6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
