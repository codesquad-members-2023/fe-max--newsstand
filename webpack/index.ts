import { HelloWorld } from "./src/components/HelloWorld";
import { setUp } from "./src/core/domdom";
import { Action } from "./src/core/types";

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
    { date: new Date() },
    (state) => {
      const helloWorldRenderingTree = HelloWorld({ date: state.date });
      return helloWorldRenderingTree;
    },
    (state, action: Action) => {}
  );
})();
