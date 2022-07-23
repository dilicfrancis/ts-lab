//Arrays in Typescript generally stick to one specific datatype.

const carMakers = ["Toyota", "Kia", "Ford"];
//const emptyArray = []; //empty initialization of arrays required manual type annotation since Type Inference does not have sufficient information to infer a type.
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["volt"]];

//Helps with Type Inference when extracting values e.g
const car = carMakers[0]; //Type Inference automatically deduces the variable's Type as a string because it know the Array is an array of strings.
const aCar = carMakers.pop(); //also gets automatically inferred as String by Type Inference.

// Prevent incompatible values
carMakers.push(3);

// Help with array methods
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types
const importantDates: (string | Date)[] = [new Date(), "2020-10-03"];
importantDates.push("2030-11-19");
importantDates.push(new Date());
