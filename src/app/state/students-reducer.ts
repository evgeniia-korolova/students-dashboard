import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";

export const mockState: Array<StudentsRecords> = [
    {
    id: '1',
    name: 'Ann',
    city: 'Toronto',
    country: 'Canada',
    subject: 'Angular',
    passportDeclaration: 'yes',
    fitnessDeclaration: 'yes',
    courseName: 'Match',
    date: '15-12-2015',
    state: 'state',
    street: '5th street',
    email: 'ann@gmail.com',
    phone: '555-555-55-55',
    postalCode: 65000
},
    {
    id: '2',
    name: 'Ann',
    city: 'Toronto',
    country: 'Canada',
    subject: 'Angular',
    passportDeclaration: 'yes',
    fitnessDeclaration: 'yes',
    courseName: 'Match',
    date: '15-12-2015',
    state: 'state',
    street: '5th street',
    email: 'ann@gmail.com',
    phone: '555-555-55-55',
    postalCode: 65000
},

]

export const studentsReducer = createReducer(
    mockState,   
);



 // on(Actions.callStudentsRecordsApiSuccess, 
    //     (state: any, { payload }: any) => {
    //         return adapter.addMany(payload, state);
    //     }
    // )