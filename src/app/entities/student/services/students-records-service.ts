import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DbJson } from '../models/db-json.model';
import { StudentsRecords } from '../models/students-records.model';



@Injectable({
  providedIn: 'root',
})
export class StudentsRecordsService {
  private http = inject(HttpClient);

  getStudentsRecords(): Observable<StudentsRecords[]> {
    return this.http
      .get<DbJson>('./db.json')
      .pipe(map((response) => response.studentsRecords));
  }
}
