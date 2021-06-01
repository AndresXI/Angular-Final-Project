import { Component, OnInit } from "@angular/core";
import { Task } from "../../taskModel";
import { TaskDataService } from "../task-data.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  task: Task[];

  constructor(private taskData: TaskDataService) {
    this.taskData.getTask().subscribe((task) => (this.task = task));
  }

  ngOnInit() {}
}
