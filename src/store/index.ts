import Component from "@components/common/Component.ts";
import { fetchData } from "@utils/index.ts";
import { TGridViewData, TListViewData } from "@customTypes/index.ts";

export enum EState {
  GridViewData = "gridViewData",
  ListViewData = "listViewData",

  HeadlinesRollerTick = "headlinesRollerTick",
  MainContentView = "mainContentView",
}

type StateItem<T> = {
  value: T;
  observers: Component[];
};

interface IStore {
  recentHeadlinesData: StateItem<
    { pressName: string; headlineTitle: string }[]
  >;
  gridViewData: StateItem<TGridViewData[]>;
  listViewData: StateItem<TListViewData[]>;

  leftHeadlineIdx: StateItem<number>;
  rightHeadlineIdx: StateItem<number>;
  headlinesRollerTick: StateItem<number>;
  mainContentView: StateItem<"list-view" | "grid-view">;
}

const recentHeadlinesData = await fetchData("/data/recent-headlines.json");
const gridViewData = await fetchData("/data/grid-view.json");
const listViewData = await fetchData("/data/list-view.json");

const store: IStore = {
  recentHeadlinesData: { value: recentHeadlinesData, observers: [] },
  gridViewData: { value: gridViewData, observers: [] },
  listViewData: { value: listViewData, observers: [] },

  leftHeadlineIdx: { value: 0, observers: [] },
  rightHeadlineIdx: { value: 1, observers: [] },
  headlinesRollerTick: { value: 0, observers: [] },
  mainContentView: { value: "grid-view", observers: [] },
};

export function observeStates(observer: Component, ...targetStates: EState[]) {
  targetStates.forEach((targetState) => {
    store[targetState].observers.push(observer);
  });
}

export function unobserveStates(
  observer: Component,
  ...targetStates: EState[]
) {
  targetStates.forEach((targetState) => {
    store[targetState].observers = store[targetState].observers.filter(
      (obs) => obs !== observer
    );
  });
}

type TAction = {
  type: string;
  content?: any;
};

export function dispatch(action: TAction) {
  reducer(action);
}

function reducer(action: TAction) {
  switch (action.type) {
    case "headlinesRollerTick":
      store.headlinesRollerTick.value += 1;

      if (store.headlinesRollerTick.value % 5 === 0) {
        store.leftHeadlineIdx.value += 2;
        store.leftHeadlineIdx.value %= store.recentHeadlinesData.value.length;
      } else if (store.headlinesRollerTick.value % 5 === 1) {
        store.rightHeadlineIdx.value += 2;
        store.rightHeadlineIdx.value %= store.recentHeadlinesData.value.length;
      }

      store.headlinesRollerTick.observers.forEach((observer) => {
        observer.setProps({
          leftHeadlineProps: {
            pressName:
              store.recentHeadlinesData.value[store.leftHeadlineIdx.value]
                .pressName,
            headline:
              store.recentHeadlinesData.value[store.leftHeadlineIdx.value]
                .headlineTitle,
          },
          rightHeadlineProps: {
            pressName:
              store.recentHeadlinesData.value[store.rightHeadlineIdx.value]
                .pressName,
            headline:
              store.recentHeadlinesData.value[store.rightHeadlineIdx.value]
                .headlineTitle,
          },
        });
      });
      break;
    case "mainContentView":
      if (action.content === store.mainContentView.value) return;

      if (action.content === "list-view") {
        store.mainContentView.value = "list-view";
      } else if (action.content === "grid-view") {
        store.mainContentView.value = "grid-view";
      }

      store.mainContentView.observers.forEach((observer) => {
        observer.setProps({ mainContentView: store.mainContentView.value });
      });
      break;
    case "gridViewData":
      store.gridViewData.observers.forEach((observer) => {
        observer.setProps({ gridViewData });
      });
      break;
    case "listViewData":
      store.listViewData.observers.forEach((observer) => {
        observer.setProps({ listViewData });
      });
      break;
  }
}
