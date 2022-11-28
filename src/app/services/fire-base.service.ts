import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/studens.model';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  readonly url: string =
    'https://students-registration-c9bdc-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private httpClient: HttpClient) {}

  registerStudent(data: Student): void {
    this.httpClient.post(`${this.url}students.json`, JSON.stringify(data));
  }

  updateStudent(data: Student, id: string): void {
    this.httpClient.put(`${this.url}students/${id}.json`, JSON.stringify(data));
  }

  getStudentList(): Observable<Record<string, Student>> {
    return this.httpClient.get<Record<string, Student>>(
      `${this.url}students.json`
    );
  }

  deleteStudent(id: string | undefined): void {
    this.httpClient.delete<void>(`${this.url}students/${id}.json`);
  }

  getStudent(id: string | undefined): Observable<Student> {
    return this.httpClient.get<Student>(`${this.url}students/${id}.json`);
  }
}
