import { createSelector } from "@ngrx/store";
import { studentsAdapter, StudentsRecordsState } from "./students-records-state";


export interface AppState {
    // students: StudentsRecords[]
    // extends EntityState
    students: StudentsRecordsState;
}


export const selectStudentsState = (state: AppState) => state.students;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = studentsAdapter.getSelectors();

export const selectStudentsEntities = createSelector(
  selectStudentsState,
  selectEntities
);

export const selectStudentById = (id: number) => createSelector(
  selectStudentsEntities,
  (entities) => { return entities[id]; }
);

export const selectAllStudents = createSelector(
  selectStudentsState,
  selectAll
  // equal to => studentsAdapter.getSelectors().selectAll
);








