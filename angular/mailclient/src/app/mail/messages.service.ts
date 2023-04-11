import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageContent } from './message-content';
import { of, throwError } from 'rxjs';

interface MessagePreview {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  url = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  fetchMessages() {
    return of<MessagePreview[]>([
      {
        id: 'ftt68hjhi',
        subject: 'template',
        from: 'pooka2DFO.COM',
      },
    ]);

    //return this.http.get<MessagePreview[]>(`${this.url}/emails`);
  }

  fetchOneMessage(id: string) {
    if (id === 'ftt68hjhi') {
      return of<MessageContent>({
        id: 'ftt68hjhi',
        subject: 'template',
        text: 'gg gkgg uogff y t9 \n gogoig iph 7f fg oi',
        to: 'luca@go.fi',
        from: 'pooka2DFO.COM',
        html: '<DIV> GO GO </DIV>',
      });
    } else {
      return throwError(new Error('error'));
    }
    //return this.http.get<MessageContent>(`${this.url}/emails/${id}`);
  }

  dispatchMessage(message: MessageContent) {
    return this.http.post(`${this.url}/emails`, message);
  }
}
