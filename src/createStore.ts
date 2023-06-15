import { Action, Reducer, State, Store, ListenerCallback } from './utils/types';

export function createStore(reducer: Reducer, preloadedState?: State | undefined): Store {
  if (typeof reducer !== 'function') {
    throw new Error('Expected the root reducer to be a function.');
  }

  const currentReducer = reducer;
  let currentState: State | undefined = preloadedState;
  const listeners: ListenerCallback[] = [];

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

    listeners.forEach((listener) => {
      listener();
    });

    return action;
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
