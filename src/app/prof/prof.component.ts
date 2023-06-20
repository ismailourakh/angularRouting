import { Component } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../models/teacher.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css'],
})
export class ProfComponent {
  profs: Teacher[] = [];
  prof: Teacher = { id: 0, name: '' };
  name: string = '';

  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.teacherService.getAllTeachers().subscribe(
      (teachers: Teacher[]) => {
        this.profs = teachers;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onChange(e: any) {
    console.log(e.target.value);
    this.name = e.target.value;
  }

  addProf(event: Event): void {
    this.teacherService.createTeacher({ name: this.name }).subscribe(
      (createdProf: Teacher) => {
        console.log('New teacher created:', createdProf);
      },
      (error: any) => {
        console.error('Error creating teacher:', error);
      }
    );
  }
}
