import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  response = [{ title: '', pageid: 0, snippet: '' }];

  constructor(private api: WikipediaService) {}

  searchTerm(event: string) {
    this.api.apiSearch(event).subscribe((res) => (this.response = res));
  }
}
