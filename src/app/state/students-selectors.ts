import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";
import { studentsAdapter, StudentsRecordsState } from "./students-records-state";


export interface AppState {
    // students: StudentsRecords[]
    students: StudentsRecordsState;
}

// export const selectAllStudents = (state: AppState) => state.students

export const selectStudentsState = (state: AppState) => state.students;

export const selectAllStudents = createSelector(
  selectStudentsState,
  studentsAdapter.getSelectors().selectAll
);





// const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal
// } = adapter.getSelectors();


