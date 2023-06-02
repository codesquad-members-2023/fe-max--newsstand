// store.ts
type State = any;
type Action = any;
type Reducer = (state: State, action: Action) => State;
type Listener = (state: State) => void;

export const createStore = (reducer: Reducer, initialState: State) => {
  let state: State = {
    headlines: await initHeadlinesState(),
  };
  const listeners: Listener[] = [];

  const getState = () => state;

  const dispatch = (action: Action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener: Listener) => {
    listeners.push(listener);
  };

  return { getState, dispatch, subscribe };
};

async function initHeadlinesState() {
  const response = await fetch("http://localhost:8080/headlines");
  const data = await response.json();

  return data.headlines;
}
