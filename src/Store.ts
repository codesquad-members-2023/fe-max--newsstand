import { Reducer } from "./Reducer";
import { Action, newsStandState } from "./utils/types";

const fetchData = async () => {
  const rollingResponse = await fetch("http://localhost:8080/rolling");
  const headlineList = await rollingResponse.json();
  const gridResponse = await fetch("http://localhost:8080/grid");
  const gridList = await gridResponse.json();

  return { headlineList, gridList };
};

const createState = async () => {
  const { headlineList, gridList } = await fetchData();
  const leftHeadlineList = headlineList.slice(0, headlineList.length / 2);
  const rightHeadlineList = headlineList.slice(headlineList.length / 2);
  const initialGridList = gridList.slice(0, 24);
  const gridMode: "grid" | "list" = "grid";

  const state = {
    date: new Date(),
    leftRoller: {
      headlineList: leftHeadlineList,
      headline: [leftHeadlineList[0], leftHeadlineList[1]],
      index: 0,
      isMove: true,
    },
    rightRoller: {
      headlineList: rightHeadlineList,
      headline: [rightHeadlineList[0], rightHeadlineList[1]],
      index: 0,
      isMove: true,
    },
    rollerTick: 0,
    currentMode: gridMode,
    grid: {
      gridData: initialGridList,
    },
  };

  return state;
};

class Store {
  private state: newsStandState;
  private listeners: Function[] = [];
  constructor(initialState: newsStandState) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    const newState = reduce(this.state, action);
    this.state = newState;
    this.notify();
  }

  subscribe(listener: Function) {
    this.listeners.push(listener);
  }

  notify() {
    for (let listener of this.listeners) {
      listener(this.state);
    }
  }
}

const reducer = new Reducer();
const reduce = reducer.reduce.bind(reducer);

export const store = new Store(await createState());

