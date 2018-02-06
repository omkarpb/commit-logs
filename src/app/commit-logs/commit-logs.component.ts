import { Component, OnInit } from '@angular/core';

import { CommitLogsService } from '../commit-logs.service';
@Component({
  selector: 'app-commit-logs',
  templateUrl: './commit-logs.component.html',
  styleUrls: ['./commit-logs.component.css']
})
export class CommitLogsComponent implements OnInit {

  results: any[] = [];
  error_text = '';
  constructor(private commitLogsService: CommitLogsService) { }

  ngOnInit() {
  }

  getCommits(userid: string, repo: string) {
    this.commitLogsService.getAllCommits(userid, repo)
    .subscribe(results => {
      this.results = results;
      this.error_text = '';
    }, error => {
      this.results = [];
      this.error_text = 'Sorry! No Users found. Try again';
      console.error(error);
    });
  }
}
