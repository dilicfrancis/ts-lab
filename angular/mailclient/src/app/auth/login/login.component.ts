import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthenticationService, private router: Router) {}

  signInHandler() {
    if (this.signInForm.valid)
      return this.auth.signIn(this.signInForm.value).subscribe({
        next: () => {
          this.router.navigateByUrl('/mail/inbox');
        },
        error: ({ error, status }) => {
          if (error.username || error.password) {
            this.signInForm.setErrors({ credentials: true });
          } else if (!status) {
            this.signInForm.setErrors({ connectionError: true });
          } else {
            this.signInForm.setErrors({ otherError: true });
          }
        },
      });

    return;
  }
}
