import { Routes } from '@angular/router';
import { Login } from './login/login/login';
import { authGuard } from './guards/auth-guard-guard';

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
        loadComponent: () => import('./dashboard/dashboard').then((c) => c.Dashboard),        
        canMatch: [authGuard],
    }
];
