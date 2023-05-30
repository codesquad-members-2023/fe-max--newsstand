interface SubscribeCallback {
  (arg: unknown): void;
}

interface StoreObservers {
  [key: string]: SubscribeCallback[];
}

export class Store<S> {
  public state = {} as S;
  private observers = {} as StoreObservers;
  constructor(state: S) {
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }

  subscribe(key: string, cb: SubscribeCallback) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
