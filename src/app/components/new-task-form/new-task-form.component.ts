import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskTypes } from 'src/app/model/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss'],
})
export class NewTaskFormComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  taskTypesList: TaskTypes[] = [];

  @Output() refreshTaskList: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    protected formBuilder: FormBuilder,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskTitle: new FormControl({ value: null, disabled: false }),
      taskType: new FormControl({ value: null, disabled: false }),
    });

    this.taskTypesList = this.tasksService.getTaskTypes();
  }

  createTask(): void {
    this.tasksService.createTask({
      taskTitle: this.form.controls['taskTitle'].value,
      taskType: this.form.controls['taskType'].value,
    });

    this.refreshTaskList.emit();
    this.form.reset();
  }
}
