import { Action } from './common/types';
import { store } from './store';
import { reducer } from './reducer';

export function dispatch(action: Action) {
  const newState = reducer(store.getState(), action)!;
  store.setState(newState);
}
