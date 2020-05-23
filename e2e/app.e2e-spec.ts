import { ZuuAppPage } from './app.po';

describe('zuu-app App', () => {
  let page: ZuuAppPage;

  beforeEach(() => {
    page = new ZuuAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
