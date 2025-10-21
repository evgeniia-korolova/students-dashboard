import { StudentsRecords } from './students-records.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { mockState } from './students-reducer';

export interface StudentsRecordsState extends EntityState<StudentsRecords> {
  selectedStudentId: string | null;
}

export const studentsAdapter: EntityAdapter<StudentsRecords> =
  createEntityAdapter<StudentsRecords>();



export const initialState = studentsAdapter.setAll(
    mockState,
    studentsAdapter.getInitialState({
        selectedStudentId: null
      }
    )
  );
  
  

// по умолчанию ищет поле id либо
// createEntityAdapter<StudentsRecords>({
//     selectId: student => student.studentId
//   });
