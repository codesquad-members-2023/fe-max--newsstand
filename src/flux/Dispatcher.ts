export default class Dispatcher<TPayload> {
  private callbacks: ((payload: TPayload) => void)[];

  constructor() {
    this.callbacks = [];
  }

  register(callback: (payload: TPayload) => void) {
    this.callbacks.push(callback);
  }

  dispatch(payload: TPayload) {
    this.callbacks.forEach((callback) => {
      callback(payload);
    });
  }
}
