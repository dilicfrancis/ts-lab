const drink = {
  color: "brown",
  carbonated: true,
  sugar: 45,
};

//Type alias
type Drink = [string, boolean, number];

const coke: Drink = ["brown", true, 45]; //the order matters in a tuple
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3423];

const carStats = {
  horsepower: 400,
  weight: 2453,
};
