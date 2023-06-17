import Component from "@components/common/Component.ts";
import { fetchData } from "@utils/index.ts";
import { TGridViewDataItem, TListViewDataItem } from "@customTypes/index.ts";

type StateItem<T> = {
  value: T;
  observers: Component[];
};

interface IStore {
  recentHeadlinesData: StateItem<
    { pressName: string; headlineTitle: string }[]
  >;
  gridViewData: StateItem<TGridViewDataItem[]>;
  listViewData: StateItem<TListViewDataItem[]>;

  headlinesRollerTick: StateItem<number>;
  leftHeadlineIdx: StateItem<number>;
  rightHeadlineIdx: StateItem<number>;

  mainContentView: StateItem<"list-view" | "grid-view">;
  listViewCurrCategoryIdx: StateItem<number>;
  listViewCurrArticleIdx: StateItem<number>;
}

const store: IStore = {
  recentHeadlinesData: { value: [], observers: [] },
  gridViewData: { value: [], observers: [] },
  listViewData: { value: [], observers: [] },

  headlinesRollerTick: { value: 0, observers: [] },
  leftHeadlineIdx: { value: 0, observers: [] },
  rightHeadlineIdx: { value: 1, observers: [] },

  mainContentView: { value: "grid-view", observers: [] },
  listViewCurrCategoryIdx: { value: 0, observers: [] },
  listViewCurrArticleIdx: { value: 0, observers: [] },
};

export function observeStates<K extends keyof IStore>(
  observer: Component,
  ...targetStates: K[]
) {
  targetStates.forEach((targetState) => {
    store[targetState].observers.push(observer);
  });
}

export function unobserveStates<K extends keyof IStore>(
  observer: Component,
  ...targetStates: K[]
) {
  targetStates.forEach((targetState) => {
    store[targetState].observers = store[targetState].observers.filter(
      (obs) => obs !== observer
    );
  });
}

type TAction<K extends keyof IStore> = {
  type: K;
  content?: any;
};

export function dispatch<K extends keyof IStore>(action: TAction<K>) {
  reducer(action);
}

function reducer<K extends keyof IStore>(action: TAction<K>) {
  const { type, content } = action;

  switch (type) {
    case "headlinesRollerTick":
      headlinesRollerTickHandler();
      break;
    case "mainContentView":
      mainContentViewHandler(content as "list-view" | "grid-view");
      break;
    case "gridViewData":
      gridViewDataHandler();
      break;
    case "listViewData":
      listViewDataHandler();
      break;
    case "listViewCurrCategoryIdx":
      listViewCurrCategoryIdxHandler(content as number);
      break;
    case "listViewCurrArticleIdx":
      listViewCurrArticleIdxHandler(content as "increment" | "decrement");
      break;
  }
}

async function headlinesRollerTickHandler() {
  const recentHeadlinesData = await fetchData("/data/recent-headlines.json");
  store.recentHeadlinesData.value = recentHeadlinesData;

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

function mainContentViewHandler(content: "list-view" | "grid-view") {
  if (content === "list-view") {
    store.mainContentView.value = "list-view";
  } else if (content === "grid-view") {
    store.mainContentView.value = "grid-view";
  }

  store.mainContentView.observers.forEach((observer) => {
    observer.setProps({ mainContentView: store.mainContentView.value });
  });
}

async function gridViewDataHandler() {
  const gridViewData = await fetchData("/data/grid-view.json");
  store.gridViewData.value = gridViewData;

  store.gridViewData.observers.forEach((observer) => {
    observer.setProps({ gridViewData: store.gridViewData.value });
  });
}

async function listViewDataHandler() {
  const listViewData = await fetchData("/data/list-view.json");
  store.listViewData.value = listViewData;

  store.listViewData.observers.forEach((observer) => {
    observer.setProps({
      listViewData: store.listViewData.value,
      listViewCurrCategoryIdx: store.listViewCurrCategoryIdx.value,
      listViewCurrArticleIdx: store.listViewCurrArticleIdx.value,
    });
  });
}

function listViewCurrCategoryIdxHandler(content: number) {
  if (content >= 0 && content < store.listViewData.value.length) {
    store.listViewCurrCategoryIdx.value = content;

    store.listViewCurrArticleIdx.value = 0;
  }

  store.listViewData.observers.forEach((observer) => {
    observer.setProps({
      listViewData: store.listViewData.value,
      listViewCurrCategoryIdx: store.listViewCurrCategoryIdx.value,
      listViewCurrArticleIdx: store.listViewCurrArticleIdx.value,
    });
  });
}

function listViewCurrArticleIdxHandler(content: "increment" | "decrement") {
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
