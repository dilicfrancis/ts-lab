//Type Inference only tries to infer the return type of a function, not its argument types.
//Therefore, function arguments should always be annotated manually.
//Also, even though Type Inference infers return types, manual annotation of return types are generally preferred.
const add = (a?: number, b?: number): number => {
  //arguments followed by a question mark ? are optional and needn't be provided for the function to run.
  return (a + b) | 0;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  //return undefined
  //return null
};

const throwError = (message: string): never => {
  //never is used only when the function is expected never the reach its end in ALL conditions.
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(weather);
};

logWeather(forecast);
