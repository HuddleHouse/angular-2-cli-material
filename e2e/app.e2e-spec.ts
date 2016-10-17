import { MyProjectNamePage } from './app.po';

describe('my-project-name App', function() {
  let page: MyProjectNamePage;

  beforeEach(() => {
    page = new MyProjectNamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
