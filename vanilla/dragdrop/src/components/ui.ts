/// <reference path = "base.ts" />
/// <reference path = "../decorators/this-binder.ts" />
/// <reference path = "../utils/state.ts" />
/// <reference path = "../models/model.ts" />
/// <reference path = "../models/dragdrop-interface.ts" />

namespace Application {
  export class Display
    extends General<HTMLDivElement, HTMLElement>
    implements Drop
  {
    committedWorks: Task[];

    constructor(private status: "active" | "finished") {
      super("project-list", "app", false, `${status}-projects`);
      this.committedWorks = [];
      this.configure();
      this.render();
    }

    @binder
    hover(e: DragEvent): void {
      if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
        e.preventDefault();
        const item = this.html.querySelector("ul")!;
        item.classList.add("droppable");
      }
    }

    @binder
    drop(e: DragEvent): void {
      console.log(e.dataTransfer!.getData("text/plain"));

      const itemID = e.dataTransfer!.getData("text/plain");
      appState.relocateWork(
        itemID,
        this.status === "active" ? Progress.Started : Progress.Completed
      );
    }

    @binder
    leave(_: DragEvent): void {
      const item = this.html.querySelector("ul")!;
      item.classList.remove("droppable");
    }

    configure(): void {
      appState.attachListener((works: Task[]) => {
        const category = works.filter((e) => {
          if (this.status === "active") return e.progress === Progress.Started;
          return e.progress === Progress.Completed;
        });
        this.committedWorks = category;
        this.showWorks();
      });

      this.html.addEventListener("dragover", this.hover);
      this.html.addEventListener("drop", this.drop);
      this.html.addEventListener("dragleave", this.leave);
    }

    render() {
      const displayID = `${this.status}-projects-list`;
      this.html.querySelector("ul")!.id = displayID;
      this.html.querySelector("h2")!.textContent =
        this.status.toUpperCase() + " WORK$";
    }

    private showWorks() {
      const listItems = document.getElementById(
        `${this.status}-projects-list`
      )! as HTMLUListElement;
      listItems.innerHTML = "";
      for (const eachItem of this.committedWorks) {
        new Item(this.html.querySelector("ul")!.id, eachItem);
      }
    }
  }
}
