import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  @Input() inputControl: FormControl = new FormControl('');

  // isInvalid() {
  //   const errors = this.inputControl.errors || false;
  //   const touched = this.inputControl.touched || false;
  //   const dirty = this.inputControl.dirty || false;
  //   return errors && touched && dirty;
  // }
}
