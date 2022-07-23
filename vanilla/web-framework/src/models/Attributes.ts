export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    //setting the function as a bound/arrow function locks "this" to references only its origin context within this function rather than to the caller's context
    //T[K] does a lookup of the key K and returns the type of the property in T
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set(attribute: T): void {
    Object.assign(this.data, attribute); //copy all the properties of the second arg and overwrite them onto the first argument.
  }
}
