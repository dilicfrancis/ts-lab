import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Injectable({ providedIn: 'root' })
export class UsernameCheck implements AsyncValidator {
  constructor(private check: AuthenticationService) {}
  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    // console.log(control.value);

    return this.check.isUsernameAvailable(control.value).pipe(
      map(() => {
        return null;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ unavailableUsername: true });
        } else {
          return of({ error: err.message });
        }
      })
    );
  };
}
