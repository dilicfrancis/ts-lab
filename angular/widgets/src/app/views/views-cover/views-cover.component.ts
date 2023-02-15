import { Component } from '@angular/core';

@Component({
  selector: 'app-views-cover',
  templateUrl: './views-cover.component.html',
  styleUrls: ['./views-cover.component.css'],
})
export class ViewsCoverComponent {
  summary = [
    { value: 839, label: 'Reviewers' },
    { value: 453, label: 'Positive' },
    { value: 324, label: 'Negative' },
  ];

  data = [
    {
      image: '/assets/images/first.jpg',
      title: 'First Art',
      description: 'Art # 1',
    },
    {
      image: '/assets/images/second.jpg',
      title: 'Second Art',
      description: 'Art # 2',
    },
    {
      image: '/assets/images/third.jpg',
      title: 'Third Art',
      description: 'Art # 3',
    },
    {
      image: '/assets/images/fourth.jpg',
      title: 'Fourth Art',
      description: 'Art # 4',
    },
  ];
}
