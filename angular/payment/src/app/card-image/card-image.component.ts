import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent {
  @Input() cardNumber: string | null | undefined = '';
  @Input() name: string | null | undefined = '';
  @Input() expiration: string | null | undefined = '';
}
