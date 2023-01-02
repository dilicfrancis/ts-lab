namespace Application {
  type EmitterFn<T> = (tasks: T[]) => void;

  class BaseState<T> {
    protected emitter: EmitterFn<T>[] = [];

    attachListener(emitFn: EmitterFn<T>) {
      this.emitter.push(emitFn);
    }
  }

  export class State extends BaseState<Task> {
    private static instance: State;
    private works: Task[] = [];

    private constructor() {
      super();
    }

    static getState() {
      if (this.instance) return this.instance;

      this.instance = new State();
      return this.instance;
    }

    attachWork(title: string, desc: string, people: number) {
      const newWork = new Task(
        Math.random().toString(),
        title,
        desc,
        people,
        Progress.Started
      );
      this.works.push(newWork);
      this.runEmitter();
    }

    relocateWork(itemID: string, update: Progress) {
      const work = this.works.find((item) => item.id === itemID);
      if (work && work.progress !== update) {
        work.progress = update;
        this.runEmitter();
      }
    }

    private runEmitter() {
      for (const Fn of this.emitter) {
        Fn(this.works.slice());
      }
    }
  }

  export const appState = State.getState();
}
