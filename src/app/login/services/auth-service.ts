import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(() => (this.isLoggedIn = true)),
    );
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}
