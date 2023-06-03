export type State = {
  currentPage: number;
  currentLastPage: number;
  currentViewMode: string;
  gridStartPoint: number;
  subsPress: [];
  [key: string]: number | string | [];
};

type Listener = () => void;

let state: State = {
  currentPage: 1,
  currentLastPage: 4,
  currentViewMode: "grid",
  gridStartPoint: 0,

  subsPress: [],
};

const listeners: Set<Listener> = new Set();

export function setState(newState: State) {
  state = { ...state, ...newState };
  for (const callback of listeners) {
    callback();
  }
}

export function getState(): State {
  return state;
}

export function subscribe(callback: Listener) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
