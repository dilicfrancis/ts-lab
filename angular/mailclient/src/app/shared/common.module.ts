import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [CustomInputComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CustomInputComponent, ModalComponent],
})
export class SharedModule {}
