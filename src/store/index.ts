import Component from "@components/common/Component.ts";
import { fetchData } from "@utils/index.ts";

export enum EState {
  HeadlinesRollerTick = "headlinesRollerTick",
  MainContentView = "mainContentView",
}

interface IStore {
  recentHeadlines: { pressName: string; headlineTitle: string }[];
  gridView: [];
  listView: [];

  leftHeadlineIdx: number;
  rightHeadlineIdx: number;
  headlinesRollerTick: number;
  mainContentView: "list-view" | "grid-view";

  headlinesRollerTickObservers: Component[];
  mainContentViewObservers: Component[];
}

const recentHeadlines = await fetchData("/data/recent-headlines.json");
const gridView = await fetchData("/data/grid-view.json");
const listView = await fetchData("/data/list-view.json");

const store: IStore = {
  recentHeadlines,
  gridView,
  listView,

  leftHeadlineIdx: 0,
  rightHeadlineIdx: 1,
  headlinesRollerTick: 0,
  mainContentView: "grid-view",

  headlinesRollerTickObservers: [],
  mainContentViewObservers: [],
};

//- Register a component as an observer of the specified states.
export function observeStates(observer: Component, ...targetStates: EState[]) {
  targetStates.forEach((targetState) => {
    store[`${targetState}Observers`].push(observer);

    console.log(
      `${observer.constructor.name} is observing "${targetState}" state.`
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
        store.leftHeadlineIdx %= store.recentHeadlines.length;
      } else if (store.headlinesRollerTick % 5 === 1) {
        store.rightHeadlineIdx += 2;
        store.rightHeadlineIdx %= store.recentHeadlines.length;
      }

      // Inform observers about the updated state (i.e. trigger a re-render of the relevant views).
      store.headlinesRollerTickObservers.forEach((observer) => {
        observer.update({
          leftHeadlineProps: {
            pressName: store.recentHeadlines[store.leftHeadlineIdx].pressName,
            headline:
              store.recentHeadlines[store.leftHeadlineIdx].headlineTitle,
          },
          rightHeadlineProps: {
            pressName: store.recentHeadlines[store.rightHeadlineIdx].pressName,
            headline:
              store.recentHeadlines[store.rightHeadlineIdx].headlineTitle,
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
        observer.update({ mainContentView: store.mainContentView });
      });
  }
}
