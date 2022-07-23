// Primitive types: numbers, string, boolean.
//Other types: arrays, objects
//Function types, parameters, etc.
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Primitives
var age;
age = 7.4; // must be a number: whole or float.
var userName = "max"; // string value
var isTypescript;
isTypescript = true; // boolean values only
// Other types: arrays, objects
var hobbies;
hobbies = ["s1", "s6"]; // only string values.
var person;
person = { name: "Max", age: 32 };
var people;
var Max;
// Type inference - works for variables you immediately initialize
// Use type inference whenever possible, no need for redundancy.
var course = "Typescript Course";
// course = 233;
var office = { chair: "", pens: 0 };
// office = {dff: false}
// Union types
var id = 0;
// Function and types
var add = function (a, b) {
    return a + b;
};
var printer = function (value) { return console.log(value); };
// Generics
var insertBeginning = function (array, value) {
    var anotherArray = __spreadArray([value], array);
};
