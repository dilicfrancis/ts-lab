import axios, { AxiosResponse } from "axios";
import { Events } from "./Events";

export class Collection<T, K> {
  models: T[] = [];
  events: Events = new Events();

  constructor(private rootUrl: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on; //referenced not called
  }

  get trigger() {
    return this.events.trigger; //referenced
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((value: K) => {
        // const user = User.build(value);
        // this.models.push(user);
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
