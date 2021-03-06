import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommitLogsComponent } from './commit-logs/commit-logs.component';
import { CommitLogsService } from './commit-logs.service';
@NgModule({
  declarations: [
    AppComponent,
    CommitLogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommitLogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
