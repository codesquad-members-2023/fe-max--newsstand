import { IAction } from "../interfaces/IAction";
import { initRolling } from "../utils/initRolling";
import { Store } from "./Store";

export const Dispatcher = (function () {
  async function onAction(action: IAction) {
    const { type } = action;
    switch (type) {
      case "updateTime":
        Store.state.date = new Date();
        break;
      case "rolling":
        const limit = Store.state.rolling.length;
        Store.state.rollingTurn =
          Store.state.rollingTurn === "LEFT" ? "RIGHT" : "LEFT";
        if (Store.state.rollingIndex + 1 == limit) {
          await initRolling();
          Store.state.rollingIndex = 0;
          return;
        }
        Store.state.rollingIndex += 1;
        break;
    }
  }

  return {
    onAction,
  };
})();
