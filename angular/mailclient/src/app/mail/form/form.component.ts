import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageContent } from '../message-content';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  messageForm = new FormGroup({
    subject: new FormControl(),
    text: new FormControl(),
    to: new FormControl(),
    from: new FormControl(),
  });
  @Input() message: MessageContent = {};
  @Output() submitMessage = new EventEmitter();

  ngOnInit(): void {
    const { subject, text, to, from } = this.message;

    this.messageForm = new FormGroup({
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
    });
  }

  submit() {
    if (this.messageForm.valid) {
      this.submitMessage.emit(this.messageForm.value);
      // console.log(this.messageForm.getRawValue());
    }

    return;
  }
}
