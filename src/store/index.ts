import Component from "@components/common/Component.ts";
import { fetchData } from "@utils/index.ts";

export enum EState {
  GridViewData = "gridViewData",

  HeadlinesRollerTick = "headlinesRollerTick",
  MainContentView = "mainContentView",
}

interface IStore {
  recentHeadlinesData: { pressName: string; headlineTitle: string }[];
  gridViewData: { src: string; alt: string }[];
  listViewData: [];

  leftHeadlineIdx: number;
  rightHeadlineIdx: number;
  headlinesRollerTick: number;
  mainContentView: "list-view" | "grid-view";

  headlinesRollerTickObservers: Component[];
  mainContentViewObservers: Component[];
  gridViewDataObservers: Component[];
}

const recentHeadlinesData = await fetchData("/data/recent-headlines.json");
const gridViewData = await fetchData("/data/grid-view.json");
const listViewData = await fetchData("/data/list-view.json");

const store: IStore = {
  recentHeadlinesData,
  gridViewData,
  listViewData,

  leftHeadlineIdx: 0,
  rightHeadlineIdx: 1,
  headlinesRollerTick: 0,
  mainContentView: "grid-view",

  headlinesRollerTickObservers: [],
  mainContentViewObservers: [],
  gridViewDataObservers: [],
};

//- Register a component as an observer of the specified states.
export function observeStates(observer: Component, ...targetStates: EState[]) {
  targetStates.forEach((targetState) => {
    store[`${targetState}Observers`].push(observer);

    console.log(`${observer.constructor.name} is observing "${targetState}".`);
  });
}

export function unobserveStates(
  observer: Component,
  ...targetStates: EState[]
) {
  targetStates.forEach((targetState) => {
    store[`${targetState}Observers`] = store[`${targetState}Observers`].filter(
      (x) => x !== observer
    );

    console.log(
      `${observer.constructor.name} is unobserving "${targetState}."`
    );
  });
}

// ---------- //

type TAction = {
  type: string;
  content?: any;
};

// Pass on the `action` from a view to the `reducer` (informing the store).
export function dispatch(action: TAction) {
  reducer(action);
}

// Receive the `action` from the dispatcher, update the state accordingly, and then update the views.
function reducer(action: TAction) {
  switch (action.type) {
    case "headlinesRollerTick":
      store.headlinesRollerTick += 1;

      if (store.headlinesRollerTick % 5 === 0) {
        store.leftHeadlineIdx += 2;
        store.leftHeadlineIdx %= store.recentHeadlinesData.length;
      } else if (store.headlinesRollerTick % 5 === 1) {
        store.rightHeadlineIdx += 2;
        store.rightHeadlineIdx %= store.recentHeadlinesData.length;
      }

      // Inform observers about the updated state (i.e. trigger a re-render of the relevant views).
      store.headlinesRollerTickObservers.forEach((observer) => {
        observer.setProps({
          leftHeadlineProps: {
            pressName:
              store.recentHeadlinesData[store.leftHeadlineIdx].pressName,
            headline:
              store.recentHeadlinesData[store.leftHeadlineIdx].headlineTitle,
          },
          rightHeadlineProps: {
            pressName:
              store.recentHeadlinesData[store.rightHeadlineIdx].pressName,
            headline:
              store.recentHeadlinesData[store.rightHeadlineIdx].headlineTitle,
          },
        });
      });
      break;
    case "mainContentView":
      if (action.content === store.mainContentView) return;

      if (action.content === "list-view") {
        store.mainContentView = "list-view";
      } else if (action.content === "grid-view") {
        store.mainContentView = "grid-view";
      }

      store.mainContentViewObservers.forEach((observer) => {
        observer.setProps({ mainContentView: store.mainContentView });
      });
      break;
    case "gridViewData":
      store.gridViewDataObservers.forEach((observer) => {
        observer.setProps({ gridViewData });
      });
      break;
  }
}
