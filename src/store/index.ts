import Component from "@components/common/Component.ts";
import { fetchData } from "@utils/index.ts";
import { TGridViewData, TListViewData } from "@customTypes/index.ts";

export enum EState {
  GridViewData = "gridViewData",
  ListViewData = "listViewData",

  HeadlinesRollerTick = "headlinesRollerTick",

  MainContentView = "mainContentView",
  ListViewCurrArticleIdx = "listViewCurrArticleIdx",
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

  headlinesRollerTick: StateItem<number>;
  leftHeadlineIdx: StateItem<number>;
  rightHeadlineIdx: StateItem<number>;

  mainContentView: StateItem<"list-view" | "grid-view">;
  listViewCurrCategoryIdx: StateItem<number>;
  listViewCurrArticleIdx: StateItem<number>;
}

const recentHeadlinesData = await fetchData("/data/recent-headlines.json");
const gridViewData = await fetchData("/data/grid-view.json");
const listViewData = await fetchData("/data/list-view.json");

const store: IStore = {
  recentHeadlinesData: { value: recentHeadlinesData, observers: [] },
  gridViewData: { value: gridViewData, observers: [] },
  listViewData: { value: listViewData, observers: [] },

  headlinesRollerTick: { value: 0, observers: [] },
  leftHeadlineIdx: { value: 0, observers: [] },
  rightHeadlineIdx: { value: 1, observers: [] },

  mainContentView: { value: "grid-view", observers: [] },
  listViewCurrCategoryIdx: { value: 0, observers: [] },
  listViewCurrArticleIdx: { value: 0, observers: [] },
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
  const { type, content } = action;

  switch (type) {
    case "headlinesRollerTick":
      headlinesRollerTickHandler();
      break;
    case "mainContentView":
      mainContentViewHandler(content);
      break;
    case "gridViewData":
      gridViewDataHandler();
      break;
    case "listViewData":
      listViewDataHandler();
      break;
    case "listViewCurrArticleIdx":
      listViewCurrArticleIdxHandler(content);
      break;
  }
}

function headlinesRollerTickHandler() {
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
}

function mainContentViewHandler(content: string) {
  if (content === store.mainContentView.value) return;

  if (content === "list-view") {
    store.mainContentView.value = "list-view";
  } else if (content === "grid-view") {
    store.mainContentView.value = "grid-view";
  }

  store.mainContentView.observers.forEach((observer) => {
    observer.setProps({ mainContentView: store.mainContentView.value });
  });
}

function gridViewDataHandler() {
  store.gridViewData.observers.forEach((observer) => {
    observer.setProps({ gridViewData: store.gridViewData.value });
  });
}

function listViewDataHandler() {
  store.listViewData.observers.forEach((observer) => {
    observer.setProps({
      listViewData: store.listViewData.value,
      listViewCurrCategoryIdx: store.listViewCurrCategoryIdx.value,
      listViewCurrArticleIdx: store.listViewCurrArticleIdx.value,
    });
  });
}

function listViewCurrArticleIdxHandler(content: string) {
  switch (content) {
    case "increment":
      const nextArticleIdx = store.listViewCurrArticleIdx.value + 1;
      const currCategoryNumArticles =
        store.listViewData.value[store.listViewCurrCategoryIdx.value].pressList
          .length;

      //- Move to the next category index but so that it loops to the front.
      if (nextArticleIdx >= currCategoryNumArticles) {
        store.listViewCurrCategoryIdx.value =
          (store.listViewCurrCategoryIdx.value + 1) %
          store.listViewData.value.length;
        store.listViewCurrArticleIdx.value = 0;
      } else {
        store.listViewCurrArticleIdx.value = nextArticleIdx;
      }
      break;
    case "decrement":
      const prevArticleIdx = store.listViewCurrArticleIdx.value - 1;

      //- Move to the previous category index but so that it loops to the back.
      if (prevArticleIdx < 0) {
        store.listViewCurrCategoryIdx.value =
          (store.listViewCurrCategoryIdx.value -
            1 +
            store.listViewData.value.length) %
          store.listViewData.value.length;
        store.listViewCurrArticleIdx.value =
          store.listViewData.value[store.listViewCurrCategoryIdx.value]
            .pressList.length - 1;
      } else {
        store.listViewCurrArticleIdx.value = prevArticleIdx;
      }
      break;
  }

  store.listViewCurrArticleIdx.observers.forEach((observer) => {
    observer.setProps({
      listViewData: store.listViewData.value,
      listViewCurrCategoryIdx: store.listViewCurrCategoryIdx.value,
      listViewCurrArticleIdx: store.listViewCurrArticleIdx.value,
    });
  });
}
