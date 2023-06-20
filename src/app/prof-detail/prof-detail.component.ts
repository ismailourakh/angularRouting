import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../models/teacher.model';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.css'],
})
export class ProfDetailComponent {
  @Input() prof: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.prof = this.teacherService.getTeacherById(parseInt(id!));
    this.teacherService.getTeacherById(parseInt(id!)).subscribe(
      (teacher: Teacher) => {
        this.prof = teacher; // Assign the returned array of teachers to the profs property
      },
      (error: any) => {
        console.error(error); // Handle any errors that occur during the API call
      }
    );
  }

  editProf(id: number): void {
    this.router.navigate([`/admin/profs/${id}/edit/`]);
  }

  deleteProf(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe(
      () => {
        // Teacher deleted successfully, navigate to teacher list
        this.router.navigate(['/prof']);
      },
      (error: any) => {
        console.error(error);
        // Handle any errors that occur during deletion
      }
    );
  }
}
