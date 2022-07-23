import { User, UserAttributes } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserAttributes> {
  eventsMap(): { [key: string]: () => void } {
    return {
      //"click:button": this.onButtonClick,
      //"mouseover:h1": this.onHeaderOver,
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-instance": this.onSaveClick,
    };
  }

  //   onButtonClick(): void {
  //     console.log("Here!");
  //   }

  //   onHeaderOver(): void {
  //     console.log("Header!");
  //   }

  onSetAgeClick = (): void => {
    this.instance.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (!input) return;
    const name = input.value;
    this.instance.set({ name });
  };

  onSaveClick = (): void => {
    this.instance.save();
  };

  template(): string {
    return `
     <div>
        <input placeholder="${this.instance.get("name")}" />
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-instance">Save User</button>
    </div>
     `;
  }
}
