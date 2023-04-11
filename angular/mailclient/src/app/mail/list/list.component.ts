import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  messages: { subject: string; from: string; id: string }[] = [];

  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.messageService.fetchMessages().subscribe((messages) => {
      //console.log(messages);

      this.messages = messages;
    });
  }
}
