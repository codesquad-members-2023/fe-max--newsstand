import { State, Reducer, Action, Subscriber } from '../type.ts';
import { reducer } from './reducer.ts';
import { systemDate } from '../utils.ts';

const defaultState: State = {
  date: systemDate,
  isAllPress: true,
  isGrid: true,
  gridIndex: 0,
};

const createStore = (reducer: Reducer, defaultState: State) => {
  let state: State = defaultState;
  const subscribers: Subscriber[] = [];

  const getState = (): State => state;

  const dispatch = (action: Action) => {
    state = reducer(state, action);
    subscribers.forEach(subscriber => subscriber());
  };

  const subscribe = (subscriber: Subscriber) => {
    subscribers.push(subscriber);
  };

  return { getState, dispatch, subscribe };
};

export const store = createStore(reducer, defaultState);
