import faker from "faker";
import { Marker } from "./Map";

export class Company implements Marker {
  name: string;
  color: string = "green";
  tagline: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.tagline = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  locationInfo(): string {
    return `<div><b>Company: ${this.name}</b>  ...${this.tagline}</div>`;
  }
}
