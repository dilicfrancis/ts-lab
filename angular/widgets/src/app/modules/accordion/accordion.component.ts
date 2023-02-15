import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() contents: any[] = [];

  itemIndex = 0;

  showContentHandler(index: number) {
    if (this.itemIndex === index) {
      this.itemIndex = -1;
    } else {
      this.itemIndex = index;
    }
  }
}
