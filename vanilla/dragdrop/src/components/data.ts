/// <reference path = "base.ts" />
/// <reference path = "../decorators/this-binder.ts" />
/// <reference path = "../utils/validate.ts" />
/// <reference path = "../utils/state.ts" />

namespace Application {
  export class Data extends General<HTMLDivElement, HTMLFormElement> {
    titleField: HTMLInputElement;
    descField: HTMLInputElement;
    peopleField: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");
      this.titleField = this.html.querySelector("#title") as HTMLInputElement;
      this.descField = this.html.querySelector(
        "#description"
      ) as HTMLInputElement;
      this.peopleField = this.html.querySelector("#people") as HTMLInputElement;

      this.configure();
    }

    configure() {
      this.html.addEventListener("submit", this.submitHandler);
    }

    render(): void {}

    private gatherData(): [string, string, number] | void {
      const dataTitle = this.titleField.value;
      const dataDesc = this.descField.value;
      const dataPeople = this.peopleField.value;

      const titleChecker: Checker = {
        value: dataTitle,
        required: true,
      };
      const descChecker: Checker = {
        value: dataDesc,
        required: true,
        minimumLength: 5,
      };
      const peopleChecker: Checker = {
        value: +dataPeople,
        required: true,
        minimumLength: 1,
        maximumLength: 5,
      };

      if (
        !validate(titleChecker) ||
        !validate(descChecker) ||
        !validate(peopleChecker)
      ) {
        alert("Invalid Entry");
        return;
      }
      return [dataTitle, dataDesc, +dataPeople];
    }

    private reset() {
      this.titleField.value = "";
      this.descField.value = "";
      this.peopleField.value = "";
    }

    @binder
    private submitHandler(event: Event) {
      event.preventDefault();
      const data = this.gatherData();
      if (Array.isArray(data)) {
        const [userTitle, userDesc, userPeople] = data;
        console.log(userTitle, userDesc, userPeople);
        appState.attachWork(userTitle, userDesc, userPeople);
        this.reset();
      }
    }
  }
}
