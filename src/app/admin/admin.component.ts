import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  admins: any[] | undefined;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.admins = this.dataService.getAdmins();
  }
}
