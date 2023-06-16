import { createStore } from './createStore';
import { Action, State } from './types';

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    case 'DECREMENT':
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

describe('createStore test', () => {
  const store = createStore(reducer, { count: 0 });

  it('getState test', () => {
    expect(store.getState()).toEqual({ count: 0 });
  });

  it('dispatch test', () => {
    store.dispatch({ type: 'INCREMENT' });
    expect(store.getState()).toEqual({ count: 1 });
  });

  it('subscribe test', () => {
    store.subscribe(() => {
      return 'subscribe';
    });
  });
});
