let state: RollerState = {
  headlines: await initHeadlinesState(),

  leftRolling: true,
  rightRolling: true,

  leftNextIndex: 2,
  rightNextIndex: 3,

  indexIncrement: 2,
};

const listeners: Record<keyof RollerState, Listener[]> = {};

const subscribe = (key: keyof RollerState, listener: Listener) => {
  if (!listeners[key]) {
    listeners[key] = [];
  }
  listeners[key].push(listener);
};

const getState = (): RollerState => {
  return { ...state };
};
const setState = (newState: Partial<RollerState>) => {
  for (let key in newState) {
    if (state[key] !== newState[key]) {
      state[key] = newState[key];
      if (listeners[key]) {
        listeners[key].forEach((listener) => listener(state[key]));
      }
    }
  }
};

async function initHeadlinesState() {
  const response = await fetch('/src/services/db.json');
  const data = await response.json();

  return data.headlines;
}

export default { getState, setState, subscribe };

type Listener = (value: string | number | boolean | object | [] | string[] | HTMLElement | null | undefined) => void;
export interface RollerState {
  [key: string]: string | number | boolean | object | [] | string[] | HTMLElement | null | undefined;

  headlines: string[];
  indexIncrement: number;

  leftRolling: boolean;
  rightRolling: boolean;

  leftNextIndex: number;
  rightNextIndex: number;
}
