import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Stock {
  urls: { small: string };
}

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  fetchPhoto() {
    return this.http.get<Stock>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID lZ_VeQyrtZCaZSmz1p2hQvNVyRdBfjLc_ZCmf559swI',
      },
    });
  }
}
