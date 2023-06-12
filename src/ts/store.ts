import { State, RollingItem, GridItem, ListItem } from './common/types';
import { URL, VIEW, MODE, VIEW_MODE, MAIN } from './common/constant';

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

async function setAllList() {
  const listData = await fetchData(URL.LIST);
  const listArray: ListItem[] = [];
  listData.forEach((item: ListItem) => {
    listArray.push(item);
  });

  return listArray;
}

async function setCurCategoryList() {
  const listArray = await setAllList();

  const curCategory: string = listArray[0].title;
  const targetTitle = curCategory;
  const filteredData = listArray.filter((item) => item.title === targetTitle);

  return filteredData;
}

async function setInitState() {
  const rollingList = await setRollingList();
  const leftRollingList = rollingList.slice(0, rollingList.length / 2);
  const rightRollingList = rollingList.slice(rollingList.length / 2);

  const allGrid = await shuffleGridList();
  const lastPage = Math.ceil(allGrid.length / MAIN.GRID_NUM);

  const allList = await setAllList();
  const curCategoryList = await setCurCategoryList();

  const state = {
    roller: {
      leftRollingList: leftRollingList,
      rightRollingList: rightRollingList,
      rollerTick: MAIN.FIRST_TICK,
    },

    viewMode: {
      view: VIEW.ALL,
      mode: MODE.GRID,
      viewMode: VIEW_MODE.ALL_GRID,
    },

    grid: {
      allGrid: allGrid,
      curPage: MAIN.FIRST_PAGE,
      lastPage: lastPage,
    },

    list: {
      allList: allList,
      categoryIndex: 0, // 종합/경제 = 0, 방송/통신 = 1, IT ...
      curCategoryList: curCategoryList, // curCategory.pressList.length 하면 해당 카테고리 언론 총 개수
      curCategoryIndex: 0, // 현재 카테고리 pressList의 index
    },
  };

  return state;
}

class Store {
  private state: State;
  private observers: { [key: string]: Function[] };

  constructor(initState: State) {
    this.state = initState;
    this.observers = {};
  }

  getState(): State {
    return this.state;
  }

  setState(newState: State): void {
    const prevState = this.state;
    this.state = newState;

    this.notify(prevState, this.state);
  }

  subscribe(key: string, observer: Function) {
    if (!this.observers[key]) {
      this.observers[key] = [];
    }
    this.observers[key].push(observer);
  }

  unsubscribe(key: string, observer: Function) {
    if (this.observers[key]) {
      this.observers[key] = this.observers[key].filter((obs) => obs !== observer);
    }
  }

  notify(prevState: State, currentState: State) {
    for (const key in currentState) {
      if (currentState.hasOwnProperty(key) && currentState[key] !== prevState[key]) {
        if (this.observers[key]) {
          this.observers[key].forEach((observer) => observer(currentState[key]));
        }
      }
    }
  }
}

export const store = new Store(await setInitState());
