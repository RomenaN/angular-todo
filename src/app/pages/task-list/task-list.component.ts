import { Component, OnInit } from '@angular/core';
import { TaskDataObj } from 'src/app/model/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  showForm: boolean = false;
  taskList: TaskDataObj[] = [];
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.taskList = this.tasksService.getTask();
  }

  deleteTask(index: number): void {
    this.tasksService.deleteTask(index);
    this.getTask();
  }
}
