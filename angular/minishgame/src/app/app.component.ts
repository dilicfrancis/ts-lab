import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sentence = lorem.sentence();
  customerText = '';

  customerInput(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.customerText = value;

    console.log(value);
  }

  getClass(randomChar: string, customerChar: string) {
    // if (!customerChar) return 'pending';
    // if (customerChar === randomChar) return 'correct';
    // if (customerChar !== randomChar) return 'incorrect';

    return !customerChar
      ? 'pending'
      : customerChar === randomChar
      ? 'correct'
      : 'incorrect';
  }
}
