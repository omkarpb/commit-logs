/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommitLogsService } from './commit-logs.service';

describe('CommitLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitLogsService]
    });
  });

  it('should ...', inject([CommitLogsService], (service: CommitLogsService) => {
    expect(service).toBeTruthy();
  }));
});
