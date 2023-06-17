import { State, invoke } from '@/store';

const subscribers: Function[] = [];

export const subscribe = (subscriber: (state: State) => void) => {
  subscribers.push(subscriber);
};

export const dispatch = (action: Action) => {
  const state = invoke(action);
  if (state) {
    subscribers.forEach((subscriber) => subscriber(state));
  }
};
