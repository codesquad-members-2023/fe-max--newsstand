class Dispatcher<TPayload> {
  private callbacks: ((payload: TPayload) => void)[];

  constructor() {
    this.callbacks = [];
  }

  register(callback: (payload: TPayload) => TState) {
    this.callbacks.push(callback);
  }

  dispatch(payload: TPayload) {
    this.callbacks.forEach((callback) => {
      callback(payload);
    });
  }
}

export default new Dispatcher();
