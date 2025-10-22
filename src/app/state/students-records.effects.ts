import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actionsList } from "./students-records.actions";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { StudentsRecordsService } from "../services/students-records-service";

@Injectable()

export class StudentsRecordsEffects {
    private actions$ = inject(Actions);
    private studentsRecordsService = inject(StudentsRecordsService)
    
    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.callStudentsRecordsApi),
        exhaustMap(() => this.studentsRecordsService.getStudentsRecords()
        .pipe(
            map(studentsRecords => ({ type: actionsList.callStudentsRecordsApiSuccess, payload: studentsRecords })),
            catchError(() => EMPTY)
        ))
    ));
}