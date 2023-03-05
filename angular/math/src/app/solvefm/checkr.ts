import { AbstractControl } from '@angular/forms';

export class Checkr {
  static validate(x: string, y: string, z: string) {
    return (form: AbstractControl) =>
      form.value[x] + form.value[y] === parseInt(form.value[z])
        ? null
        : { Incorrect: true };
  }
}
