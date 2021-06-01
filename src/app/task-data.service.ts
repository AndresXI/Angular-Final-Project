import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Task } from "src/taskModel";

@Injectable({
  providedIn: "root",
})
export class TaskDataService {
  taskUrl = "http://localhost:3000/task";

  getTask = (): Observable<Task[]> => {
    return this.http.get<Task[]>(this.taskUrl);
  };

  getTaskById = (id: number): Observable<Task> => {
    return this.http.get<Task>(`${this.taskUrl}/${id}`);
  };

  deleteTaskById = (id: number): Observable<Task> => {
    return this.http.delete<Task>(`${this.taskUrl}/${id}`);
  };

  createTask = (task: Task): Observable<Task> => {
    return this.http.post<Task>(`${this.taskUrl}`, task);
  };

  constructor(private http: HttpClient) {}
}
