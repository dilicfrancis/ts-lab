import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('attribute') classNames = ''; //input aliasing

  @Input() data: any[] = [];
  @Input() label: any[] = [];
}
