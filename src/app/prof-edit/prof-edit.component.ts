import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../models/teacher.model';

@Component({
  selector: 'app-prof-edit',
  templateUrl: './prof-edit.component.html',
  styleUrls: ['./prof-edit.component.css']
})
export class ProfEditComponent {
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

  updateProf(id: number, name: String): void {
    this.prof.name = name;
    this.teacherService.updateTeacher(id, this.prof).subscribe(
      (teacher: Teacher) => {
        this.router.navigateByUrl(`/admin/profs/${teacher.id}`);
        // this.router.navigate(['/prof/', teacher.id]);
      },
      (error: any) => {
        console.error(error); // Handle any errors that occur during the API call
      }
    )
  }
}
