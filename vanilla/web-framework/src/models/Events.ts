type CallFn = () => void; //creates a Type Alias

export class Events {
  private eventStack: { [key: string]: CallFn[] } = {}; //Keys of the expected object can be annotated

  on = (event: string, callFn: CallFn): void => {
    //To lock "this" onto its absolute origin rather the its relative, use the bound/arrow function.
    const handlers = this.eventStack[event] || [];
    handlers.push(callFn);
    this.eventStack[event] = handlers;
  };

  trigger = (event: string): void => {
    //To lock "this" onto its absolute origin rather the its relative, use the bound/arrow function.
    const handlers = this.eventStack[event];
    if (!handlers || handlers.length === 0) return;
    handlers.forEach((callFn) => callFn());
  };
}
