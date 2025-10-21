import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";
import { studentsAdapter, StudentsRecordsState } from "./students-records-state";


export interface AppState {
    students: StudentsRecords[]
}

export const selectAllStudents = (state: AppState) => state.students





// const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal
// } = adapter.getSelectors();


