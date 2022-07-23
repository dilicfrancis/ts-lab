const civic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return this.year + this.broken;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 59,
  summary() {
    return this.sugar;
  },
};

const logCar = (car: { name: string; year: Date; broken: boolean }): void =>
  console.log(JSON.stringify(car)); //args type annotation is long and un-reusable

logCar(civic);

//better approach

interface Car {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
interface Report {
  summary(): string;
}
const logCarNew = (car: Car): void => console.log(JSON.stringify(car));

//function can now be abstracted to refer to any reports rather than only vehicle reports.
const logReport = (
  item: Report //variable given an interface type can have extra properties that aren't defined in the interface type, but they can't use those extra properties without triggering an error.
): void => console.log(JSON.stringify(item.summary())); //arg car contains extra properties that aren't being used in the function or type.

logCarNew(civic);
logReport(civic);

//object drink can now reuse the function
logReport(drink);
