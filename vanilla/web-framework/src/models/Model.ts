import { AxiosPromise, AxiosResponse } from "axios";

interface Attributes<T> {
  //just like classes and functions, interfaces can be a generic too
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(attribute: T): void;
}

interface IO<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(event: string, callFn: () => void): void;
  trigger(event: string): void;
}

interface HasID {
  id?: number;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: Attributes<T>,
    private io: IO<T>,
    private events: Events
  ) {}

  //brittle code
  on = this.events.on; //Property assignments are handled before function and object assignments.
  trigger = this.events.trigger; //Only use this pass-though approach when certain that the properties are already initialize prior to the code
  get = this.attributes.get; //Or when the properties are created with access modifiers in the constructor's args list (args), which initializes them prior.

  //   get on() {
  //     return this.events.on; //referenced, not called/executed
  //   }

  //   get trigger() {
  //     return this.events.trigger; //referenced, not executed
  //   }

  //   get get() {
  //     return this.attributes.get; //referenced, not executed
  //   }

  set(attribute: T): void {
    this.attributes.set(attribute);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") throw new Error("Missing an ID!");

    this.io.fetch(id).then((res: AxiosResponse): void => this.set(res.data));
  }

  save(): void {
    this.io
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => this.trigger("save"))
      .catch(() => this.trigger("error"));
  }
}
