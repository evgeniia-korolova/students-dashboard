
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { StudentsRecords } from '../models/students-records.model';


export interface StudentsRecordsState extends EntityState<StudentsRecords> {
  selectedStudentId: string | null;}

export const studentsAdapter: EntityAdapter<StudentsRecords> =
  createEntityAdapter<StudentsRecords>();
  
export const initialState: StudentsRecordsState = studentsAdapter.getInitialState({
  selectedStudentId: null
});


  

// по умолчанию ищет поле id либо
// createEntityAdapter<StudentsRecords>({
//     selectId: student => student.studentId
//   });
