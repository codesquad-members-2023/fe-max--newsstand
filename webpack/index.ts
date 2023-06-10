import { App } from "./App";
import { FakeDom } from "./src/core/FakeDom";
import "./style.css";

(() => {
  const root = FakeDom.createRoot(document.getElementById("root")!);

  
  root.render(App());
})();
