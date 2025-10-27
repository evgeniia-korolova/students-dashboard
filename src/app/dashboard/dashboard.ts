import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactUs } from '../contact-us/contact-us';
import { StudentsTable } from '../students-table/students-table/students-table';
import { StudentEntry } from '../student-entry/student-entry';

@Component({
  selector: 'app-dashboard',
  imports: [MatTabsModule,
    StudentsTable,
    StudentEntry,
    ContactUs],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
