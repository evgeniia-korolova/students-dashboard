import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard-guard';
import { Login } from './pages/login/login';


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
        loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard),        
        canMatch: [authGuard],
    }
];
