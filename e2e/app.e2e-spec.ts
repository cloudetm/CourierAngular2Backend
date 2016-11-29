import { CourierAngular2BackendPage } from './app.po';

describe('courier-angular2-backend App', function() {
  let page: CourierAngular2BackendPage;

  beforeEach(() => {
    page = new CourierAngular2BackendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
