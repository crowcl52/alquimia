import { AlquimiaPage } from './app.po';

describe('alquimia App', () => {
  let page: AlquimiaPage;

  beforeEach(() => {
    page = new AlquimiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
