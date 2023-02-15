import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-cover',
  templateUrl: './collections-cover.component.html',
  styleUrls: ['./collections-cover.component.css'],
})
export class CollectionsCoverComponent {
  feed = [
    { name: 'Pooky Hound', age: 54, job: 'Plumber', employed: true },
    { name: 'Loki Klove', age: 44, job: 'Historian', employed: false },
    { name: 'Palou Cakiko', age: 32, job: 'Doctor', employed: true },
    { name: 'Koku Baboni', age: 28, job: 'Writer', employed: false },
  ];

  headers = [
    { key: 'name', label: 'Full Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' },
  ];
}
