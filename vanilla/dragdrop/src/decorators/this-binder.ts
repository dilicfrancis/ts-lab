namespace Application {
  export function binder(
    _target: any,
    _methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const mainFn = descriptor.value;
    const callerDesc: PropertyDescriptor = {
      configurable: true,
      get() {
        const callerFn = mainFn.bind(this);
        return callerFn;
      },
    };
    return callerDesc;
  }
}
