let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let unknown: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array
let colors: string[] = ["red", "blue", "yellow"];
let valNum: number[] = [3, 5, 6];
let truthTable: boolean[] = [true, false, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let axis: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

/*Type Inference only works when variable declaration
  and initialization happens on the same line of code.
  In all of the above examples, we could ave relied on
  Type Inference since all declarations where also
  assigned values on the same line. Type annotations
  are best when Type Inference isn't easily determine. */

//When to use Type Annotation
// 1) When a Function returns the "any" type.
const json = "{ 'x': 10, 'y': 30 }";
//const coordinates = JSON.parse(json); //without annotation, JSON.Parse returns "any"
const coordinates: { x: number; y: number } = JSON.parse(json); //without annotation, JSON.Parse returns "any"
console.log(coordinates); //{x:10, y:30}

//2) When declaring a variable on one line and initialize it later.
let words = ["red", "green", "blue"];
//let foundWord; //Type Inference doesn't work because initialization was not done at declaration. So variable is assigned the "any" type
let foundWord: boolean; //solution - help Typescript by annotation manually after declaration (or by initializing with a placeholder value)

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") foundWord = true;
}

//3) Variable with type that cannot be inferred correctly by Type Inference.
let numbers = [-3, -4, 4];
//let numberAboveZero = false; // by initializing the variable, Type Inference kicks in and assigns the type boolean to the variable.
let numberAboveZero: boolean | number = false; // by manually annotating, we inform Typescript the this variable can also be a number.
//Therefore, whenever an OR reference to Type is required, manually annotating the variable is also required. Type Inference will not work.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
