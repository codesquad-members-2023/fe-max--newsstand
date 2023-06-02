export type State = {
  [key: string]: any;
};

type ListenerCallback = (state: State) => void;

let state: State = {};

const listeners: Set<ListenerCallback> = new Set();

export function setState(newState: State) {
  state = { ...state, ...newState };
  for (const cb of listeners) {
    cb(state);
  }
}

export function getState(): State {
  return state;
}

export function subscribe(callback: ListenerCallback): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
