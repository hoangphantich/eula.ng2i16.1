import { BontraxSitePage } from './app.po';

describe('bontrax-site App', function() {
  let page: BontraxSitePage;

  beforeEach(() => {
    page = new BontraxSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
