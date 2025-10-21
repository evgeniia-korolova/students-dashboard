import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentsRecords } from '../../state/students-records.model';
import { AppState, selectAllStudents } from '../../state/students-selectors';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.scss',
})
export class StudentsTable {
  private store = inject(Store<AppState>);
  dataSource: StudentsRecords[] = [];

  // dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAllStudents);
  dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAllStudents);
  displayedColumns: string[] = [
    'name',
    'city',
    'country',
    'subject',
    'passportDeclaration',
    'fitnessDeclaration',
    'courseName',
    'date',
    'state',
    'street',
    'email',
    'phone',
    'postalCode',
  ];

  ngOnInit() {
    this.dataSource$.subscribe((res: StudentsRecords[]) => {
      console.log('students:', res);
      this.dataSource = res;
    });
  }
}
