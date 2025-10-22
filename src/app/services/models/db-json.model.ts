import { StudentsRecords } from "../../state/students-records.model";

export interface DbJson {
    login: any; 
    studentsRecords: StudentsRecords[];
  }