import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateMaskControl } from '../date-mask-control';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent {
  paymentForm = new FormGroup({
    customerName: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      // Validators.maxLength(10),
      // Validators.pattern(/\s/),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateMaskControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{3,4}$/),
    ]),
  });

  resetHandler() {
    this.paymentForm.reset();
  }

  submitHandler() {}
}
