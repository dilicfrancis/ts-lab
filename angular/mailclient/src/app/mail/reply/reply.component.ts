import { Component, Input, OnChanges } from '@angular/core';
import { MessageContent } from '../message-content';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnChanges {
  openModal = false;

  @Input() message: MessageContent = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: '',
  };

  constructor(private messageService: MessagesService) {}

  submit(message: MessageContent) {
    return this.messageService.dispatchMessage(message).subscribe(() => {
      this.openModal = false;
    });
  }

  ngOnChanges(): void {
    this.message = {
      ...this.message,
      from: this.message.to,
      to: this.message.from,
      subject: 'RE: ' + this.message.subject,
      text: `\n\n\n---------- ${
        this.message.from
      } wrote:\n> ${this.message.text?.replace(/\n/gi, '\n > ')}`,
    };
  }
}
