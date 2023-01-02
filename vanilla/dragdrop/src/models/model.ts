namespace Application {
  export enum Progress {
    Started,
    Completed,
  }

  export class Task {
    constructor(
      public id: string,
      public title: string,
      public desc: string,
      public people: number,
      public progress: Progress
    ) {}
  }
}
