/// <reference types="@types/google.maps" />

export interface Marker {
  //interfaces can be exported too
  color: string;
  location: {
    lat: number;
    lng: number;
  };
  locationInfo(): string;
}

export class Map {
  private map: google.maps.Map;

  constructor(id: string) {
    this.map = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  //Bad Approach
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({ map: this.map, position: user.location }); //calls the constructor function.
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({ map: this.map, position: company.location }); //calls the constructor function.
  // }

  //Better Approach - removes code duplication
  // addMarker(marker: Company | User): void { //the vertical OR operator in objects types refer to only commonalities between listed types: User | Company. Referring to any property that doesn't exist in BOTH types User and Company will not work.
  //   new google.maps.Marker({ map: this.map, position: marker.location }); //calls the constructor function.
  // }

  //Best Approach - makes use of an interface
  addMarker(marker: Marker): void {
    const location = new google.maps.Marker({
      map: this.map,
      position: marker.location,
    }); //calls the constructor function.
    location.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.locationInfo(),
      });
      infoWindow.open(this.map, location);
    });
  }
}
