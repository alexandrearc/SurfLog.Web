import { SurfLogPage } from './app.po';

describe('surf-log App', () => {
  let page: SurfLogPage;

  beforeEach(() => {
    page = new SurfLogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
