import { App } from "./App";
import { Dispatcher } from "./src/core/Dispatcher";
import { FakeDom } from "./src/core/FakeDom";
import { initNews } from "./src/utils/initNews";
import { initRolling } from "./src/utils/initRolling";
import "./src/sass/style.sass"

(async () => {
  const root = FakeDom.createRoot(document.getElementById("root")!);

  setInterval(() => {
    Dispatcher.onAction({ type: "updateTime" });
  }, 1000);

  setInterval(() => {
    Dispatcher.onAction({ type: "rolling" });
  }, 1000);

  await initRolling();
  await initNews();

  root.render(App());
  Dispatcher.onAction({ type: "rolling" });
})();
