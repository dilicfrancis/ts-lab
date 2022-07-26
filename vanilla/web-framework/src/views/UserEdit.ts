import { User, UserAttributes } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";

export class UserEdit extends View<User, UserAttributes> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.instance).render();
    new UserForm(this.regions.userForm, this.instance).render();
  }

  template(): string {
    return `
        <div>
            <div class="user-show"></div>
            <div class="user-form"></div>
        </div>
        `;
  }
}
