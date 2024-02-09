import { OlaCollegeV1TemplatePage } from './app.po';

describe('OlaCollegeV1 App', function() {
  let page: OlaCollegeV1TemplatePage;

  beforeEach(() => {
    page = new OlaCollegeV1TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
