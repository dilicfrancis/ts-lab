import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface WikiResponse {
  query: { search: { title: string; pageid: number; snippet: string }[] };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  apiSearch(query: string) {
    return this.http
      .get<WikiResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: query,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
