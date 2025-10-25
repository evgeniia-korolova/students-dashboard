import { createReducer, on } from '@ngrx/store';
import * as Actions from './students-records.actions';
import { initialState, studentsAdapter } from './students-records-state';



export const studentsReducer = createReducer(
  initialState,
  on(Actions.callStudentsRecordsApiSuccess, (state, { payload }) =>
    studentsAdapter.addMany(payload, state),
  ),
);
