class NumArrays {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class StrArray {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//Using Generics

class AnyArray<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const newArray = new AnyArray(["red", "blue"]); //Type Inference infers type String to the generics because of the values inside the array.

//Generics in Functions

function printNum(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printStr(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function print<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

print([false, true]); //Type Inferred during assignment
print<boolean>([false, true]); //While usually correctly inferred, best practice is to add generics types manually to help catch errors of mistaken assignments.

//Generic Constraints

class Car {
  print() {
    console.log("I am a car.");
  }
}
class House {
  print() {
    console.log("I am a house.");
  }
}

interface Printable {
  print(): void;
}

function printItems<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printItems<Car>([new Car(), new Car()]);
printItems<House>([new House(), new House()]);
