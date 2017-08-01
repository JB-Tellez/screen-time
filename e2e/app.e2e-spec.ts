import { ScreenTimePage } from './app.po';

describe('screen-time App', () => {
  let page: ScreenTimePage;

  beforeEach(() => {
    page = new ScreenTimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
