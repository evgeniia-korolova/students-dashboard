import { Routes } from '@angular/router';
import { Login } from './login/login/login';
import { StudentsTable } from './students-table/students-table/students-table';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        component: StudentsTable
    }
];
