import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrls: ['./etudiant-detail.component.css'],
})
export class EtudiantDetailComponent {
  @Input() etudiant: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(parseInt(id!)).subscribe(
      (student: Student) => {
        this.etudiant = student; // Assign the returned array of students to the profs property
      },
      (error: any) => {
        console.error(error); // Handle any errors that occur during the API call
      }
    );
  }

  editEtudiant(id: number): void {
    this.router.navigate([`/admin/etudiants/${id}/edit/`]);
  }

  deleteEtudiant(id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        // Student deleted successfully, navigate to student list
        this.router.navigate(['/student']);
      },
      (error: any) => {
        console.error(error);
        // Handle any errors that occur during deletion
      }
    );
  }
}