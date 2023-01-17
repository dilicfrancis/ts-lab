import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customerName = '';
  transactionDate = '';
  quantity = 0;
  weight = 0;
  amount = 0;

  onName(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.customerName = value;
  }

  onDate(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.transactionDate = value;
  }

  onQuantity(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.quantity = parseFloat(value);
  }

  onWeight(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.weight = parseFloat(value);
  }

  onAmount(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.amount = parseFloat(value);
  }
}
