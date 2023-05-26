import { App } from "./component/App";
import store from "./store/store";
import { newsStandState } from "./utils/types";

type ActionType = "INCREMENT_TICK" | "TOGGLE_ROLLING_STATE";

interface ActionBase {
  type: ActionType;
}

interface IncrementTick extends ActionBase {
  type: "INCREMENT_TICK";
}

interface ToggleRollingState extends ActionBase {
  type: "TOGGLE_ROLLING_STATE";
  target: "left" | "right";
}

type Action = IncrementTick | ToggleRollingState;

const root = (() => {
  const root = document.body;
  if (!root) {
    throw new Error("root not found");
  }
  return root;
})();
const state = store.getState();
const app = new App({
  date: state.date,
  leftRollerHeadline: state.leftRoller.headline,
  rightRollerHeadline: state.rightRoller.headline,
});

export const dispatcher = (action: Action) => {
  switch (action.type) {
    case "INCREMENT_TICK": {
      store.incrementTick();
      stateChanged(store.getState());
      break;
    }
    case "TOGGLE_ROLLING_STATE": {
      action.target;
    }
  }
};

const stateChanged = (state: newsStandState) => {
  app.update({
    date: state.date,
    leftRollerHeadline: state.leftRoller.headline,
    rightRollerHeadline: state.rightRoller.headline,
  });
  appRender();
};

const appRender = () => {
  if (root.firstElementChild !== app.node && app.node) {
    root.firstElementChild?.remove();
    root.appendChild(app.node);
  }
};
appRender();
