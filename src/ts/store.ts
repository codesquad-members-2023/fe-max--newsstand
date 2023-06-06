import { State, GridItem, RollingItem } from './common/types';
import { URL, MAIN } from './common/constant';

async function fetchData(url: string) {
  const baseUrl = URL.BASE_SERVER;
  const response = await fetch(baseUrl + url);
  const data = await response.json();
  return data;
}

async function shuffleGridList() {
  const gridList = await fetchData(URL.GRID);
  const gridArray: GridItem[] = [];
  gridList.forEach((item: GridItem) => {
    gridArray.push(item);
  });

  for (let i = 0; i < gridArray.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));

    [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
  }
  return gridArray;
}

async function setRollingList() {
  const rollingData = await fetchData(URL.ROLLING);
  const rollingArray: RollingItem[] = [];
  rollingData.forEach((item: RollingItem) => {
    rollingArray.push(item);
  });
  return rollingArray;
}

async function setInitState() {
  const rollingList = await setRollingList();
  const leftRollingList = rollingList.slice(0, rollingList.length / 2);
  const rightRollingList = rollingList.slice(rollingList.length / 2);

  const gridList = await shuffleGridList();
  const lastPage = Math.ceil(gridList.length / MAIN.GRID_NUM);

  const state = {
    leftRollingList: leftRollingList,
    rightRollingList: rightRollingList,
    rollerTick: MAIN.FIRST_TICK,

    gridList: gridList,
    curPage: MAIN.FIRST_PAGE,
    lastPage: lastPage,
  };

  return state;
}

class Store {
  private state: State;
  private observers: Function[];

  constructor(initState: State) {
    this.state = initState;
    this.observers = [];
  }

  getState(): State {
    return this.state;
  }

  setState(newState: State): void {
    this.state = newState;
  }

  subscribe(observer: Function) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Function) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(state: State) {
    this.observers.forEach((observer) => observer(state));
  }
}

export const store = new Store(await setInitState());
