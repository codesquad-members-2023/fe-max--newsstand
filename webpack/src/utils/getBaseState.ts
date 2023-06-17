import { RollingTurn } from "../constants/RollingTurn";
import { INews } from "../interfaces/INews";
import { IState } from "../interfaces/IState";
import { ActivePressType } from "../types/ActivePressType";
import { ViewType } from "../types/ViewType";

export function getBaseState() {
  const state = {
    date: new Date(),
    rolling: [],
    rollingIndex: 0,
    rollingTurn: RollingTurn.LEFT,
    news: {} as INews,
    mainPress: {},
    activePress: "ALL" as ActivePressType,
    viewType: "LIST" as ViewType,
    gridPageIndex: 0,
    gridPageLimit: 0,
    pressArr: [],
    listIndex: 0,
    listLimit: 0,
    subscribePress: {},
    subscribeGridIndex: 0,
    subscribeGridLimit: 0,
  } as IState;

  return state;
}
