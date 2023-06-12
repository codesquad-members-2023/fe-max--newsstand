import { IAction } from "../interfaces/IAction";
import { Store } from "./Store";

export const Dispatcher = (function () {
  
  function onAction(action: IAction) {
    const { type, payload } = action;
    switch (type) {
      case "updateTime":
        Store.state.date = new Date();
        break;
    }
  }

  return {
    onAction,
  };
})();
