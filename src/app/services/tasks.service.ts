import { Injectable } from '@angular/core';
import { TaskDataObj, TaskTypes } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskList: TaskDataObj[] = [];

  constructor() {}

  createTask(value: TaskDataObj, id: string): void {
    if (localStorage.getItem('task')) {
      this.taskList = this.getTasks();
      if (id === 'new') {
        this.taskList.push(value);
      } else {
        this.taskList[Number(id)] = value;
      }
      localStorage.setItem('task', JSON.stringify(this.taskList));
    } else {
      this.taskList.push(value);
      localStorage.setItem('task', JSON.stringify(this.taskList));
    }
  }

  getTasks(): TaskDataObj[] {
    return JSON.parse(localStorage.getItem('task') as string);
  }

  getTask(id: string): TaskDataObj {
    return this.getTasks()[Number(id)];
  }

  deleteTask(index: number): void {
    if (index > -1) {
      const tasks = this.getTasks();
      tasks.splice(index, 1);
      localStorage.setItem('task', JSON.stringify(tasks));
    }
  }

  getTaskTypes(): TaskTypes[] {
    return [
      {
        value: 'Neskubus',
        status: 'info',
        label: 'Neskubus',
      },
      {
        value: 'Rutininis',
        status: 'success',
        label: 'Rutininis',
      },
      {
        value: 'Skubus',
        status: 'warn',
        label: 'Skubus',
      },
      {
        value: 'Ypač skubus',
        status: 'risk',
        label: 'Ypač skubus',
      },
    ];
  }
}
