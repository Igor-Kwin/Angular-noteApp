import { WritingappPage } from './app.po';

describe('writingapp App', () => {
  let page: WritingappPage;

  beforeEach(() => {
    page = new WritingappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
