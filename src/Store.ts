import { Action, currentTypeList, newsStandState } from "./utils/types";
import { Reducer } from "./Reducer";

const ITEM_PER_PAGE = 24;

const fisherYatesShuffle = (array: currentTypeList) => {
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
  const url = "http://localhost:8080";
  const rollingResponse = await fetch(`${url}/rolling`);
  const headlineList = await rollingResponse.json();
  const gridResponse = await fetch(`${url}/grid`);
  const gridList = fisherYatesShuffle(await gridResponse.json());

  return { headlineList, gridList };
};

const getSubscribedPress = (): string[] => {
  const localStorageData = localStorage.getItem("subscribe");

  if (localStorageData === null) {
    localStorage.setItem("subscribe", JSON.stringify([]));

    return [];
  }

  return JSON.parse(localStorageData);
};

const createState = async () => {
  const { headlineList, gridList } = await fetchData();
  const subscribedPress = getSubscribedPress();

  const leftHeadlineList = headlineList.slice(0, headlineList.length / 2);
  const rightHeadlineList = headlineList.slice(headlineList.length / 2);
  const currentViewGridList = gridList.slice(0, ITEM_PER_PAGE);

  const contentType: "grid" | "list" = "list";
  const currentType: "all" | "sub" = "all";

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
    currentContent: contentType,
    currentType: currentType,
    currentPage: 0,
    subscribedPress: subscribedPress,
    grid: {
      gridAllList: gridList,
      currentTypeList: gridList,
      currentViewList: currentViewGridList,
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
