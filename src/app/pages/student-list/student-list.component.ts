import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/studens.model';
import { FireBaseService } from 'src/app/services/fire-base.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  showForm: boolean = false;
  studentList: Student[] = [];
  constructor(
    private fireBaseService: FireBaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.fireBaseService
      .getStudentList()
      .subscribe((result: Record<string, Student>) => {
        Object.values(result).forEach((element, index) => {
          this.studentList.push({
            id: Object.keys(result)[index],
            name_surename: element.name_surename,
            year_of_birth: element.year_of_birth,
            gender: element.gender,
            email: element.email,
            phone: element.phone,
            class: element.class,
          });
        });
      });
  }

  deleteStudent(id: string | undefined): void {
    this.fireBaseService.deleteStudent(id);
    //this.getStudents();
  }

  updateTask(index: number): void {
    this.route.navigate(['register', index]);
  }
}
