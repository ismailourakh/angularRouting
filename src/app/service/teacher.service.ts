import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private baseURL =
    'http://localhost:8080/spring_demo_mvc_webapp_init_war/teachers';

  constructor(private http: HttpClient) {}

  createTeacher(teacher: any): Observable<any> {
    return this.http.post<any>(this.baseURL, teacher);
  }
  // createTeacher(...args: [teacher: Teacher]): Observable<Teacher> {
  //   return this.http.post<Teacher>(this.baseURL, teacher);
  // }

  updateTeacher(teacherId: number, teacher: Teacher): Observable<Teacher> {
    const url = `${this.baseURL}/${teacherId}`;
    return this.http.put<Teacher>(url, teacher);
  }

  getSubjectsByTeacherId(teacherId: number): Observable<Subject[]> {
    const url = `${this.baseURL}/${teacherId}/subjects`;
    return this.http.get<Subject[]>(url);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseURL);
  }

  getTeacherById(teacherId: number): Observable<Teacher> {
    const url = `${this.baseURL}/${teacherId}`;
    return this.http.get<Teacher>(url);
  }

  deleteTeacher(teacherId: number): Observable<void> {
    const url = `${this.baseURL}/${teacherId}`;
    return this.http.delete<void>(url);
  }
}
