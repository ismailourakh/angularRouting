import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL =
    'http://localhost:8080/spring_demo_mvc_webapp_init_war/students';

  constructor(private http: HttpClient) {}

  createStudent(student: any): Observable<any> {
    return this.http.post<any>(this.baseURL, student);
  }
  // createStudent(...args: [student: Student]): Observable<Student> {
  //   return this.http.post<Student>(this.baseURL, student);
  // }

  updateStudent(studentId: number, student: Student): Observable<Student> {
    const url = `${this.baseURL}/${studentId}`;
    return this.http.put<Student>(url, student);
  }

  getSubjectsByStudentId(studentId: number): Observable<Subject[]> {
    const url = `${this.baseURL}/${studentId}/subjects`;
    return this.http.get<Subject[]>(url);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL);
  }

  getStudentById(studentId: number): Observable<Student> {
    const url = `${this.baseURL}/${studentId}`;
    return this.http.get<Student>(url);
  }

  deleteStudent(studentId: number): Observable<void> {
    const url = `${this.baseURL}/${studentId}`;
    return this.http.delete<void>(url);
  }
}
