import { MoselUiPage } from './app.po';

describe('mosel-ui App', () => {
  let page: MoselUiPage;

  beforeEach(() => {
    page = new MoselUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
