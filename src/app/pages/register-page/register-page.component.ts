import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/studens.model';
import { FireBaseService } from 'src/app/services/fire-base.service';
import { yearOfBirth } from 'src/app/validators/year-of-birth.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class NewTaskPageComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  urlValue: string = '';
  constructor(
    protected formBuilder: FormBuilder,
    private fireBaseService: FireBaseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] !== 'new') {
      this.getStudent(this.activatedRoute.snapshot.params['id']);
    }

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
  }

  createTask(): void {
    if (this.form.status !== 'VALID') {
      alert('Forma turi klaidų');
    } else {
      if (this.activatedRoute.snapshot.params['id'] === 'new') {
        this.fireBaseService.registerStudent({
          name_surename: this.form.controls['nameSurname'].value,
          year_of_birth: this.form.controls['yearOfBirth'].value,
          gender: this.form.controls['gender'].value,
          email: this.form.controls['email'].value,
          phone: this.form.controls['phone'].value,
          class: this.form.controls['class'].value,
        });
      } else {
        this.fireBaseService.updateStudent(
          {
            name_surename: this.form.controls['nameSurname'].value,
            year_of_birth: this.form.controls['yearOfBirth'].value,
            gender: this.form.controls['gender'].value,
            email: this.form.controls['email'].value,
            phone: this.form.controls['phone'].value,
            class: this.form.controls['class'].value,
          },
          this.activatedRoute.snapshot.params['id']
        );
      }
    }
  }
  getStudent(id: string): void {
    this.fireBaseService.getStudent(id).subscribe((response) => {
      this.setFormData(response);
    });
  }

  setFormData(data: Student): void {
    this.form.controls['nameSurname'].setValue(data.name_surename);
    this.form.controls['yearOfBirth'].setValue(data.year_of_birth);
    this.form.controls['gender'].setValue(data.gender);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['phone'].setValue(data.phone);
    this.form.controls['class'].setValue(data.class);
  }
}
