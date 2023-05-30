import { Reducer } from "./Reducer";
import { Action, GridData, newsStandState } from "./utils/types";

const fisherYatesShuffle = (array: GridData) => {
  let count = array.length;

  while (count) {
    let index = Math.floor(Math.random() * count--);
    let temp = array[count];

    array[count] = array[index];
    array[index] = temp;
  }

  return array;
};

const fetchData = async () => {
  const rollingResponse = await fetch("http://localhost:8080/rolling");
  const headlineList = await rollingResponse.json();
  const gridResponse = await fetch("http://localhost:8080/grid");
  const gridList = fisherYatesShuffle(await gridResponse.json());

  return { headlineList, gridList };
};

const createState = async () => {
  const ITEM_PER_PAGE = 24;
  const { headlineList, gridList } = await fetchData();
  const leftHeadlineList = headlineList.slice(0, headlineList.length / 2);
  const rightHeadlineList = headlineList.slice(headlineList.length / 2);
  const currentGridList = gridList.slice(0, ITEM_PER_PAGE);
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
    currentPage: 0,
    grid: {
      gridData: gridList,
      currentGridList: currentGridList,
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

