type RollerState = {
  headlines: string[];
  leftRolling: boolean;
  rightRolling: boolean;
  leftRollingAmount: number;
  rightRollingAmount: number;
  leftCurrentIndex: number;
  leftNextIndex: number;
  rightCurrentIndex: number;
  rightNextIndex: number;
  [key: string]: string | number | boolean | object | [];
};

type Listener = () => void;

type Intent = {
  [key: string]: string | number | boolean | object | [];
};

const initHeadlinesState = async () => {
  const response = await fetch('/src/services/db.json');
  const data = await response.json();

  return data.headlines;
};

let state: RollerState = {
  headlines: await initHeadlinesState(),
  leftRolling: true,
  rightRolling: true,

  leftRollingAmount: 1,
  rightRollingAmount: 1,

  leftCurrentIndex: 0,
  leftNextIndex: 2,

  rightCurrentIndex: 1,
  rightNextIndex: 3,
};

const listeners: Listener[] = [];

const getState = (): RollerState => {
  return state;
};

const setState = (newState: Intent) => {
  state = { ...state, ...newState };

  notifyListeners();
};

const subscribe = (listener: Listener) => {
  listeners.push(listener);
};

const notifyListeners = () => {
  for (const listener of listeners) {
    listener();
  }
};

initHeadlinesState();

export default { getState, setState, subscribe };
// setState, subscribe
