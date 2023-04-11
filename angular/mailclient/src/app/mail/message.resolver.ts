import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';
import { MessageContent } from './message-content';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class MessageResolver implements Resolve<MessageContent> {
  constructor(
    private messageService: MessagesService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MessageContent> {
    const { id } = route.params;
    return this.messageService.fetchOneMessage(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('mail/inbox/deleted');
        return EMPTY;
      })
    );
  }
}
