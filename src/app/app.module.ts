import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TaskListComponent } from "./task-list/task-list.component";
import { AppRoutingModule } from './app-routing.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
