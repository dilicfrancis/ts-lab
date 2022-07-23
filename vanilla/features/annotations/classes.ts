class Car {
  drive(): void {
    console.log("Drives well");
  }

  honk(): void {
    console.log("honk honk");
  }
}

class Toyota extends Car {
  drive(): void {
    console.log("Find new places");
  }
}

const civic = new Car();
// civic.drive();
// civic.honk();

const corolla = new Toyota();
// corolla.drive();
// corolla.honk();

//Modifiers

class Plane {
  constructor(ready: boolean) {
    this.ready = ready;
  }

  //   public fly(): void {
  //     console.log("Drives well");
  //   }

  protected land(): void {
    console.log("honk honk");
  }

  deiced: boolean = true; //fields are either initialized when declared or..
  ready: boolean; //initialized by the constructor of the class... or created as a shortcut in the constructor.
}

class SouthWest extends Plane {
  constructor(ready: boolean, public refueled: boolean) {
    //variables that are declared in the constructor args shortcut are prefixed with their access modifier i.e. public, private or protected
    super(ready);
  }
  private fly(): void {
    console.log("Find new places");
  }

  takeOff(): void {
    this.fly();
    this.land();
  }
}

const RouteAustin = new SouthWest(false, true);
RouteAustin.takeOff();
console.log(RouteAustin.deiced);
console.log(RouteAustin.ready);
console.log(RouteAustin.refueled);
