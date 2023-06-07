import { getState, setState } from "../store/store";
import { reducer } from "../store/reducer";

export type Action = { type: string; payload?: any };

export const dispatch = (action: Action) => {
  const newState = reducer(getState(), action);
  setState(newState);
};
