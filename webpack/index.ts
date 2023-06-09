import { App } from "./App";
import { Store } from "./src/core/Store";
import { setUp } from "./src/core/nDom";
import { Action } from "./src/interfaces/Action";
import { RenderingTree } from "./src/interfaces/RenderingTree";
import { State } from "./src/interfaces/State";
import "./style.css";

(() => {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("root element not found");
  }

  function stateToRenderingTree(store: Store<State>): RenderingTree {
    const AppRenderingTree = App(store);
    return AppRenderingTree;
  }

  function updateStateOnAction(store: Store<State>, action: Action): void {
    switch (action.type) {
      case "DateIndicate":
        store.state.date = new Date();
        break;
    }
  }

  const state: State = {
    date: new Date(),
  };

  setUp<State, Action>(
    root,
    new Store(state),
    stateToRenderingTree,
    updateStateOnAction
  );
})();
