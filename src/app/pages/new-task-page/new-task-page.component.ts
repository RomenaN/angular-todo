import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTypes } from 'src/app/model/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.scss'],
})
export class NewTaskPageComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  taskTypesList: TaskTypes[] = [];
  urlValue: string = '';
  constructor(
    protected formBuilder: FormBuilder,
    private tasksService: TasksService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskTitle: new FormControl({ value: null, disabled: false }),
      taskType: new FormControl({ value: null, disabled: false }),
    });
    this.getTask();
    this.taskTypesList = this.tasksService.getTaskTypes();
  }

  createTask(): void {
    this.tasksService.createTask(
      {
        taskTitle: this.form.controls['taskTitle'].value,
        taskType: this.form.controls['taskType'].value,
      },
      this.urlValue
    );
    this.form.reset();
    this.route.navigate(['task-list']);
  }

  getTask(): void {
    this.urlValue = this.activatedRoute.snapshot.params['id'];
    if (this.urlValue !== 'new') {
      this.form.controls['taskTitle'].setValue(
        this.tasksService.getTask(this.urlValue).taskTitle
      );
      this.form.controls['taskType'].setValue(
        this.tasksService.getTask(this.urlValue).taskType
      );
    }
  }
}
