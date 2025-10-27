import { StudentsRecords } from "./students-records.model";


export interface DbJson {
    login: any; 
    studentsRecords: StudentsRecords[];
  }