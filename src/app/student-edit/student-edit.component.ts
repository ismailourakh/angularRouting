import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  @Input() student: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(parseInt(id!)).subscribe(
      (student: Student) => {
        this.student = student; // Assign the returned array of teachers to the profs property
      },
      (error: any) => {
        console.error(error); // Handle any errors that occur during the API call
      }
    );
  }

  
  updateStudent(id: number, name: String, email: String): void {
    this.student.name = name;
    this.student.email = email;
    this.studentService.updateStudent(id, this.student).subscribe(
      (student: Student) => {
        this.router.navigateByUrl(`/admin/etudiants/${student.id}`);
      },
      (error: any) => {
        console.error(error); // Handle any errors that occur during the API call
      }
    )
  }
}
