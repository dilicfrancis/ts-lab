import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PasswordMatch implements Validator {
  validate(formGrp: AbstractControl): ValidationErrors | null {
    if (formGrp.value['password'] === formGrp.value['passwordConfirm']) {
      return null;
    } else {
      return { MismatchedPassword: true };
    }
  }
}
