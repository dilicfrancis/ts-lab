import { User, UserAttributes } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserAttributes> {
  template(): string {
    return `
        <div>
            <h1>User Detail</h1>
            <div>User Name: ${this.instance.get("name")}</div>
            <div>User Age: ${this.instance.get("age")}</div>
        </div>
        `;
  }
}
