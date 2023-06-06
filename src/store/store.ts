import { GRID_MAX_PAGE } from "../constants/constant";

export type State = {
  currentPage: number;
  currentLastPage: number;
  currentViewMode: string;
  currentPressMode: string;

  gridStartPoint: number;

  subsPress: string[];

  currentArticleIndex: number;

  [key: string]: number | string | string[];
};

type Listener = (state: State) => void;

let state: State = {
  currentPage: 1,
  currentLastPage: GRID_MAX_PAGE,
  currentViewMode: "grid",
  currentPressMode: "total",

  gridStartPoint: 0,

  subsPress: [],

  currentArticleIndex: 0,
};

// const listeners: Set<Listener> = new Set();
// const listeners = {};

const listeners: Record<keyof State, Listener[]> = {};

// export function subscribe(callback: Listener) {
//   listeners.add(callback);
//   return () => listeners.delete(callback);
// }
const subscribe = (key: keyof State, listener: Listener) => {
  if (!listeners[key]) {
    listeners[key] = [];
  }
  listeners[key]!.push(listener);
};

const setState = (newState: Partial<State>) => {
  for (let key in newState) {
    if (state[key] !== newState[key]) {
      state[key] = newState[key]!;
      if (listeners[key]) {
        listeners[key]!.forEach((listener) => listener(state[key]));
      }
    }
  }
};
// export function setState(newState: State) {
//   state = { ...state, ...newState };
//   for (const callback of listeners) {
//     callback();
//   }
// }

export function getState(): State {
  return { ...state };
}
