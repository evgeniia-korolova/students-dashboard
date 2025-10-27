import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactUs } from '../../features/contact-us/contact-us';
import { StudentEntry } from '../../features/student-entry/student-entry';
import { StudentsTable } from '../../features/students-table/students-table';


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
