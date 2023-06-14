import { IObserver } from "../interfaces/IObserver";
import { IState } from "../interfaces/IState";
import { Callback } from "../types/Callback";

export const Store = (function generateStore() {
  const state = {} as Record<string, any>;
  const observers = {} as Record<string, IObserver>;

  function setState(newState: IState) {
    const temp = { ...state };
    for (const name in state) {
      delete state[name];
    }
    for (const name in newState) {
      if (temp[name]) {
        state[name] = temp[name];
      } else {
        let value = newState[name];
        Object.defineProperty(state, name, {
          get: () => value,
          set: (_value) => {
            value = _value;
            if (observers[name]) {
              observers[name].forEach((cb) => cb());
            }
          },
        });
      }
    }
  }

  function subscribe(name: string, cb: Callback) {
    observers[name] ? observers[name].push(cb) : (observers[name] = [cb]);
  }

  return {
    state,
    setState,
    subscribe,
  };
})();
