import { CommitLogsPage } from './app.po';

describe('commit-logs App', function() {
  let page: CommitLogsPage;

  beforeEach(() => {
    page = new CommitLogsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
