import Component from "@components/common/Component.ts";
import { fetchData } from "@utils/index.ts";

export enum EState {
  HeadlinesRollerTick = "headlinesRollerTick",
}

interface IStore {
  recentHeadlines: { pressName: string; headlineTitle: string }[];
  gridView: [];
  listView: [];

  leftHeadlineIdx: number;
  rightHeadlineIdx: number;
  headlinesRollerTick: number;

  headlinesRollerTickObservers: Component[];
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

  headlinesRollerTickObservers: [],
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
      // Manipulate `store.headlinesRollerTick`, `store.leftHeadlineIdx`, `store.rightHeadlineIdx`.
      store.headlinesRollerTick++;

      // Inform observers about the updated state (i.e. trigger a re-render of the relevant views).
      store.headlinesRollerTickObservers.forEach((x) => {
        x.update({
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
  }
}
