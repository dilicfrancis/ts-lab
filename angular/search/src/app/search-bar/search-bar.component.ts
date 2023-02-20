import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  term = '';
  @Output() submitTerm = new EventEmitter<string>();

  submitHandler(event: Event) {
    event.preventDefault();
    this.submitTerm.emit(this.term);
  }
}
