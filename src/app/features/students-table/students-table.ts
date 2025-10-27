import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentsRecords } from '../../state/students-records.model';
import { AppState, selectAllStudents, selectStudentById } from '../../state/students-selectors';
import * as Actions from '../../state/students-records.actions';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsTable {
  private store = inject(Store<AppState>);
  // protected dataSource: StudentsRecords[] = [];
  protected $dataSource = signal<StudentsRecords[]>([]);
  protected studentsFilter = new FormControl();

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

  constructor() {
    this.store.dispatch(Actions.callStudentsRecordsApi());
  }

  ngOnInit() {
    this.dataSource$.subscribe((result: StudentsRecords[]) => {      
      this.$dataSource.set(result);
    });

    this.studentsFilter.valueChanges.subscribe((value: number) => {
      if (!!value) {
        const studentsRecord = this.store.select(selectStudentById(value));
        studentsRecord.subscribe((res: any) => {
          this.$dataSource.set([res]);
          console.log(res, 'Selected Record');
        });
      } else {
        const studentsRecords = this.store.select(selectAllStudents);
        studentsRecords.subscribe((res: any) => {
          this.$dataSource.set([res]);
          console.log(res, 'All Selected Students');
        });
      }
    });
  }
}
