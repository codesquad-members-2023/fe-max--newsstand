import { Action, currentTypeList, newsStandState } from "./utils/types";
import { Reducer } from "./Reducer";

const ITEM_PER_PAGE = 24;

const fisherYatesShuffle = (array: any[]) => {
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
  const gridResponse = await fetch(`${url}/grid`);
  const listResponse = await fetch(`${url}/list`);

  const headlineList = await rollingResponse.json();
  const gridData = fisherYatesShuffle(await gridResponse.json());
  const listData = await listResponse.json();

  return { headlineList, gridData, listData };
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
  const { headlineList, gridData, listData } = await fetchData();
  const subscribedPress = getSubscribedPress();

  const leftHeadlineList = headlineList.slice(0, headlineList.length / 2);
  const rightHeadlineList = headlineList.slice(headlineList.length / 2);
  const currentViewGridData = gridData.slice(0, ITEM_PER_PAGE);

  const contentType: "grid" | "list" = "list";
  const currentType: "all" | "sub" = "all";

  const state: newsStandState = {
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
      gridAllList: gridData,
      currentTypeList: gridData,
      currentViewList: currentViewGridData,
    },
    list: {
      currentViewIndex: 0,
      listAllList: listData,
      currentTypeList: listData,
      currentViewList: listData[0],
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

