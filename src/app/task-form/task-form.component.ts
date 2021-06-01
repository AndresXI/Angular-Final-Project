import { Component, OnInit } from "@angular/core";
import { Task } from "../../taskModel";
import { TaskDataService } from "../task-data.service";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit {
  model: Task = new Task();

  constructor(private taskData: TaskDataService) {}

  ngOnInit() {}

  onSubmit() {
    const id = Math.random();
    let createdModel = { ...this.model, id };
    this.taskData.createTask(createdModel).subscribe(() => {
      window.location.reload();
    });
  }
}
