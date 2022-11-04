import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountetTask, TaskDataObj, TaskTypes } from 'src/app/model/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-status-cards',
  templateUrl: './status-cards.component.html',
  styleUrls: ['./status-cards.component.scss'],
})
export class StatusCardsComponent implements OnChanges {
  @Input() data: TaskDataObj[] = [];

  countetTask: CountetTask[] = [];
  taskTypesList: TaskTypes[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.taskTypesList = this.tasksService.getTaskTypes();
    const data = changes['data'].currentValue;
    this.countetTask = [];

    this.taskTypesList.forEach((element: TaskTypes) => {
      this.countetTask.push({
        title: element.label,
        count: this.countDublicates(element.label, data),
        status: element.status,
      });
    });
  }

  countDublicates(value: string, data: TaskDataObj[]): number {
    let count = 0;
    data.forEach((element) => {
      if (element.taskType === value) {
        count++;
      }
    });
    return count;
  }
}
