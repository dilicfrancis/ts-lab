import faker from "faker"; //TypeScript no default convention doesn't apply to third-party packages since most rely on default exports
import { Marker } from "./Map";

export class User implements Marker {
  //TypeScript convention is not to use export default so we needn't worry about when to or not to use curly braces.
  name: string;
  color: string = "blue";
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    //constructor is usually at the top right after any property listed. | Methods come after properties, with constructor method usually foremost.
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  locationInfo(): string {
    return `User: ${this.name}`;
  }
}
