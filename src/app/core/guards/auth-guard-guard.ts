import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../login/services/auth-service';

export const authGuard: CanMatchFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    router.createUrlTree(['/login']);
    return true;
  }

  return router.createUrlTree(['/login']);
};
