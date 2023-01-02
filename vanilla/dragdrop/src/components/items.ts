/// <reference path = "base.ts" />
/// <reference path = "../decorators/this-binder.ts" />
/// <reference path = "../models/model.ts" />
/// <reference path = "../models/dragdrop-interface.ts" />

namespace Application {
  export class Item
    extends General<HTMLUListElement, HTMLLIElement>
    implements Drag
  {
    private task: Task;

    get allotment() {
      if (this.task.people === 1) return "1 person";
      return `${this.task.people} people`;
    }

    constructor(host: string, task: Task) {
      super("single-project", host, false, task.id);
      this.task = task;
      this.configure();
      this.render();
    }

    @binder
    dragBegin(e: DragEvent): void {
      e.dataTransfer!.setData("text/plain", this.task.id);
      e.dataTransfer!.effectAllowed = "move";
    }

    dragEnd(_: DragEvent): void {
      console.log("dragged");
    }

    configure(): void {
      this.html.addEventListener("dragstart", this.dragBegin);
      this.html.addEventListener("dragend", this.dragEnd);
    }

    render(): void {
      this.html.querySelector("h2")!.textContent = this.task.title;
      this.html.querySelector("h3")!.textContent = this.allotment + " alloted";
      this.html.querySelector("p")!.textContent = this.task.desc;
    }
  }
}
