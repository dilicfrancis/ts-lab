// Primitive types: numbers, string, boolean.
//Other types: arrays, objects
//Function types, parameters, etc.

//Primitives
let age: number;

age = 7.4; // must be a number: whole or float.

let userName: string = "max"; // string value

let isTypescript: boolean;

isTypescript = true; // boolean values only

// Other types: arrays, objects

let hobbies: string[];

hobbies = ["s1", "s6"]; // only string values.

let person: { name: string; age: number };

person = { name: "Max", age: 32 };

let people: { name: string; age: number }[];

//Type Alias
type Person = { name: string; age: number };

let Max: Person[];

// Type inference - works for variables you immediately initialize
// Use type inference whenever possible, no need for redundancy.

let course = "Typescript Course";

// course = 233;

let office = { chair: "", pens: 0 };

// office = {dff: false}

// Union types

let id: number | string = 0;

// Function and types

const add = (a: number, b: number): number | string => {
  return a + b;
};

const printer = (value: string) => console.log(value);

// Generics

const insertBeginning = <T>(array: T[], value: T) => {
  const anotherArray = [value, ...array];
  return anotherArray;
};

const demoArray: string[] = ["Hey", "You", "There"];

const newArray: string[] = insertBeginning(demoArray, "Aloha");
