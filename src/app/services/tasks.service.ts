import { Injectable } from '@angular/core';
import { TaskDataObj, TaskTypes } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskList: TaskDataObj[] = [];

  constructor() {}

  createTask(value: TaskDataObj): void {
    if (localStorage.getItem('task')) {
      this.taskList = this.getTask();
      this.taskList.push(value);
      localStorage.setItem('task', JSON.stringify(this.taskList));
    } else {
      this.taskList.push(value);
      localStorage.setItem('task', JSON.stringify(this.taskList));
    }
  }

  getTask(): TaskDataObj[] {
    return JSON.parse(localStorage.getItem('task') as string);
  }

  deleteTask(index: number): void {
    if (index > -1) {
      const tasks = this.getTask();
      tasks.splice(index, 1);
      localStorage.setItem('task', JSON.stringify(tasks));
    }
  }

  getTaskTypes(): TaskTypes[] {
    return [
      {
        value: 'Skubus',
        label: 'Skubus',
      },
      {
        value: 'Ypač skubus',
        label: 'Ypač skubus',
      },
      {
        value: 'Rutininis',
        label: 'Rutininis',
      },
      {
        value: 'Neskubus',
        label: 'Neskubus',
      },
    ];
  }
}
