import { Action, Reducer, State, Store } from './utils/types';

export function createStore(reducer: Reducer, preloadedState?: State | undefined): Store {
  if (typeof reducer !== 'function') {
    throw new Error('Expected the root reducer to be a function.');
  }

  const currentReducer = reducer;
  let currentState: State | undefined = preloadedState;
  const listeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action: Action) {
    if (typeof action.type === 'undefined') {
      throw new Error(
        'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.',
      );
    }

    if (typeof action.type !== 'string') {
      throw new Error('Action "type" property must be a string.');
    }

    currentState = currentReducer(currentState, action);
  }

  function subscribe(listener: () => void) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    listeners.push(listener);
  }

  const store = { getState, dispatch, subscribe } as Store;
  return store;
}

// export class Store {
//   reducer: Reducer;
//   state: State;

//   constructor(reducer: Reducer<State, Action>, state) {
//     if (typeof reducer !== 'function') {
//       throw new Error('Expected the root reducer to be a function.');
//     }

//     this.reducer = reducer;
//     this.state = state;
//   }

//   getState() {
//     return currentState;
//   }

//   dispatch(action) {}

//   subscribe(listener: () => void) {
//     if (typeof listener !== 'function') {
//       throw new Error('Expected the listener to be a function.');
//     }

//     this.listeners.push(listener);
//   }

//   notify() {
//     this.observers.forEach((obs) => {
//       obs.update(this.state);
//     });
//   }
// }
