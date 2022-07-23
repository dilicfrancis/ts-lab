import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiIO } from "./ApiIO";
import { Events } from "./Events";
import { Collection } from "./Collection";

export interface UserAttributes {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserAttributes> {
  static build(attributes: UserAttributes): User {
    return new User(
      new Attributes<UserAttributes>(attributes),
      new ApiIO<UserAttributes>(rootUrl),
      new Events()
    );
  }

  static buildCollection(): Collection<User, UserAttributes> {
    return new Collection<User, UserAttributes>(
      rootUrl,
      (json: UserAttributes) => User.build(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 89);
    this.set({ age });
  }
}
