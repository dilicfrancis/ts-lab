import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { PasswordMatch } from '../validators/password-match';
import { UsernameCheck } from '../validators/username-check';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(
    private passwordMatch: PasswordMatch,
    private usernameCheck: UsernameCheck,
    private auth: AuthenticationService,
    private router: Router
  ) {}
  authFm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.usernameCheck.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]),
    },
    { validators: [this.passwordMatch.validate] }
  );

  SubmitSignUpHandler() {
    //console.log(this.authFm.value);

    if (this.authFm.valid)
      return this.auth.signUp(this.authFm.value).subscribe({
        next: () => {
          this.router.navigateByUrl('/mail/inbox');
        },
        error: (err) => {
          if (!err.status) {
            this.authFm.setErrors({ connectionError: true });
          } else {
            this.authFm.setErrors({ otherError: true });
          }
        },
      });

    console.log(this.authFm.invalid);

    return;
  }
}
