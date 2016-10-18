import { KnightsWhoSayNiPage } from './app.po';

describe('knights-who-say-ni App', function() {
  let page: KnightsWhoSayNiPage;

  beforeEach(() => {
    page = new KnightsWhoSayNiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
