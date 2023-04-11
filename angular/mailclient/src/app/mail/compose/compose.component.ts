import { Component } from '@angular/core';
import { MessageContent } from '../message-content';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
})
export class ComposeComponent {
  openModal = false;
  message: MessageContent = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: '',
  };

  constructor(
    auth: AuthenticationService,
    private messageService: MessagesService
  ) {
    this.message.from = `${auth.username}@angular-email.com`;
  }

  submit(message: MessageContent) {
    return this.messageService.dispatchMessage(message).subscribe(() => {
      this.openModal = false;
    });
  }
}
