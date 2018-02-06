/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommitLogsComponent } from './commit-logs.component';

describe('CommitLogsComponent', () => {
  let component: CommitLogsComponent;
  let fixture: ComponentFixture<CommitLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
