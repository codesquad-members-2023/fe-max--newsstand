import { App } from "./App";
import { Dispatcher } from "./src/core/Dispatcher";
import { FakeDom } from "./src/core/FakeDom";
import "./style.css";

(() => {
  const root = FakeDom.createRoot(document.getElementById("root")!);

  setInterval(() => {
    Dispatcher.onAction({ type: "updateTime" });
  }, 1000);

  root.render(App());
})();
