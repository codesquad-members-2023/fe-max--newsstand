import { App } from "./App";
import { setUp } from "./src/core/dom";
import { Action } from "./src/core/types";
import "./style.css";

(() => {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("root element not found");
  }

  interface State {
    date: Date;
  }

  setUp<State, Action>(
    root,
    {
      date: new Date(),
    },
    (state) => {
      const AppRenderingTree = App({ date: state.date });
      return AppRenderingTree;
    },
    (state, action: Action) => {}
  );
})();
