import { Action, Reducer, Store } from "./types";

export const createStore = <T>(initialState: T, reducer: Reducer<T>): Store<T> => {
  let currentState = initialState;

  const subscribers: ((state: T) => void)[] = [];

  return {
    dispatch(action: Action) {
      currentState = reducer(currentState, action);
      subscribers.forEach((subscriber) => subscriber(currentState));
    },

    subscribe(subscriber: (state: T) => void) {
      subscribers.push(subscriber);
    },

    getState() {
      return currentState;
    },
  };
};
