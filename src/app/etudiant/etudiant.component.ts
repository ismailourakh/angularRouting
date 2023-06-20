import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent {
  name: string = '';
  email: string = '';
  etudiant: Student = { id: 0, name: '', email: '0' };
  etudiants: any[] | undefined;
  constructor(private studentService: StudentService, private router: Router) {}
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getAllStudents().subscribe(
      (students: Student[]) => {
        this.etudiants = students;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addStudent(event: Event): void {
    this.studentService.createStudent({ name: this.name, email: this.email }).subscribe(
      (createdStudent: Student) => {
        console.log('New teacher created:', createdStudent);
        window.location.reload();
      },
      (error: any) => {
        console.error('Error creating teacher:', error);
      }
    );
  }

  onNameChange(e: any) {
    this.name = e.target.value;
  }
  onEmailChange(e: any) {
    this.email = e.target.value;
  }
}
