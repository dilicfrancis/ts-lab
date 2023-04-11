import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent {
  @Input() inputField = new FormControl('');
  @Input() label = '';
  @Input() format = '';
  @Input() inputType = '';

  // errorMessages() {
  //   return (
  //     this.inputField.errors && this.inputField.touched && this.inputField.dirty
  //   );
  // }
}
