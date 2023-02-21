import { Component } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  randomPhoto = '';
  constructor(private api: StockService) {
    this.getPhotoHandler();
  }
  getPhotoHandler() {
    this.api
      .fetchPhoto()
      .subscribe((result) => (this.randomPhoto = result.urls.small));
  }
}
