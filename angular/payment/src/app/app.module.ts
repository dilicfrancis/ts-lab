import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { CardImageComponent } from './card-image/card-image.component';

@NgModule({
  declarations: [AppComponent, PaymentFormComponent, InputFieldComponent, CardImageComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
