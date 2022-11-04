import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private tasksService: TasksService, private route: Router) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.taskList = this.tasksService.getTasks();
  }

  deleteTask(index: number): void {
    this.tasksService.deleteTask(index);
    this.getTask();
  }

  updateTask(index: number): void {
    this.route.navigate(['new-task', index]);
  }
}
