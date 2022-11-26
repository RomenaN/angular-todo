import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTypes } from 'src/app/model/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { yearOfBirth } from 'src/app/validators/year-of-birth.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
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
      nameSurname: new FormControl(
        null,
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.required,
        ])
      ),
      yearOfBirth: new FormControl(
        null,
        Validators.compose([Validators.required, yearOfBirth])
      ),
      gender: new FormControl('female'),
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      phone: new FormControl(
        null,
        Validators.compose([Validators.minLength(10), Validators.maxLength(12)])
      ),
      class: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.min(5),
          Validators.max(12),
        ])
      ),
    });
    this.getTask();
    this.taskTypesList = this.tasksService.getTaskTypes();
  }

  createTask(): void {
    if (this.form.status !== 'VALID') {
      alert('Forma turi klaidų');
    } else {
      console.log(this.form);
    }

    // this.tasksService.createTask(
    //   {
    //     taskTitle: this.form.controls['taskTitle'].value,
    //     taskType: this.form.controls['taskType'].value,
    //   },
    //   this.urlValue
    // );
    // this.form.reset();
    // this.route.navigate(['task-list']);
  }

  getTask(): void {
    // this.urlValue = this.activatedRoute.snapshot.params['id'];
    // if (this.urlValue !== 'new') {
    //   this.form.controls['taskTitle'].setValue(
    //     this.tasksService.getTask(this.urlValue).taskTitle
    //   );
    //   this.form.controls['taskType'].setValue(
    //     this.tasksService.getTask(this.urlValue).taskType
    //   );
    // }
  }
}
