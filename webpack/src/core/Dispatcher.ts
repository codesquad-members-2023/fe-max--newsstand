import { ActivePress } from "../constants/ActivePress";
import { IAction } from "../interfaces/IAction";
import { initRolling } from "../utils/initRolling";
import { Store } from "./Store";

export const Dispatcher = (function () {
  async function onAction(action: IAction) {
    const { type, payload } = action;
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
      case "activeAllPress":
        Store.state.activePress = "ALL";
        break;
      case "activeSubscribePress":
        Store.state.activePress = "SUBSCRIBE";
        break;
      case "activeViewTypeGrid":
        Store.state.viewType = "GRID";
        break;
      case "activeViewTypeList":
        Store.state.viewType = "LIST";
        break;
      case "addGridPageIndex":
        Store.state.gridPageIndex =
          (Store.state.gridPageIndex + 1) % Store.state.gridPageLimit;
        break;
      case "decGridPageIndex": {
        const limit = Store.state.gridPageLimit as number;
        Store.state.gridPageIndex =
          (Store.state.gridPageIndex - 1 + limit) % limit;
        break;
      }
      case "subscribe":
        Store.state.subscribePress[payload] =
          !Store.state.subscribePress[payload];
        Store.state.subscribePress = Store.state.subscribePress;
        break;
    }
  }

  return {
    onAction,
  };
})();
