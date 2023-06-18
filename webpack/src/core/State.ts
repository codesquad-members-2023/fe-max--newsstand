import { IState } from "../interfaces/IState";
import { Store } from "./Store";
import { getBaseState } from "../utils/getBaseState";

function generateState(baseState: IState) {
  const state = {} as IState;

  for (const name in baseState) {
    state[name] = baseState[name];
  }

  Store.setState(state);

  return [
    state,
    (name: string, value: any) => {
      if (!(name in state)) {
        state[name] = value;
        Store.setState(state);
      }
    },
  ];
}

export const [State, addState] = generateState(getBaseState());
