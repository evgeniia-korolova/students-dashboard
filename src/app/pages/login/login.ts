import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router)
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onLoginUser() {
    if(this.loginForm.valid) {
      // this.authService.login()
      

      this.authService.login().subscribe(
        ()=> {
          if (this.authService.isLoggedIn) {
            // Usually you would use the redirect URL from the auth service.
            // However to keep the example simple, we will always redirect to `/admin`.
            //const redirectUrl = '/dashboard';
            this.router.navigate(['./dashboard'])
    
            // Set our navigation extras object
            // that passes on our global query params and fragment
            // const navigationExtras: NavigationExtras = {
            //   queryParamsHandling: 'preserve',
            //   preserveFragment: true
            // };
    
            // Redirect the user
            // this.router.navigate([redirectUrl], navigationExtras);
          }
        }
      );
    }
  }
}
