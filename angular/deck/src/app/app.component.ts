import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  slide = [
    {
      title: 'Mundane Green',
      customername: 'gringo',
      content: 'Dazzling trees with basic green leaves.',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'White Peak',
      customername: 'rockyroar',
      content: 'Fascinating stud of solid white rock.',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Cyclist',
      customername: 'extremebiker',
      content: 'Extreme biking for the cause.',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
