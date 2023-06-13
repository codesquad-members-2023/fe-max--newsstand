import { IState } from "../interfaces/IState";
import { Store } from "./Store";
import { RollingTurn } from "../constants/RollingTurn";
import { INews } from "../interfaces/INews";
import { ActivePressType } from "../types/ActivePressType";
import { ViewType } from "../types/ViewType";

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

export const [State, addState] = generateState({
  date: new Date(),
  rolling: [],
  rollingIndex: 0,
  rollingTurn: RollingTurn.LEFT,
  news: {} as INews,
  activePress: "ALL" as ActivePressType,
  viewType: "GRID" as ViewType,
});
