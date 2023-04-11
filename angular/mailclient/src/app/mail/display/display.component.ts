import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../messages.service';
import { switchMap } from 'rxjs';
import { MessageContent } from '../message-content';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent /*implements OnInit*/ {
  message: MessageContent = {};

  constructor(
    private route: ActivatedRoute,
    private messageService: MessagesService
  ) {
    this.message = this.route.snapshot.data['message'];
    //console.log(this.route.snapshot.data);

    this.route.data.subscribe(({ message }) => {
      //console.log(message);

      this.message = message;
    });
  }

  //   ngOnInit(): void {
  //     this.route.params
  //       .pipe(
  //         switchMap(({ id }) => {
  //           return this.messageService.fetchOneMessage(id);
  //         })
  //       )
  //       .subscribe((message) => (this.message = message));
  //   }
}
