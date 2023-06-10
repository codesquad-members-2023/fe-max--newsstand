import { Header } from "./src/components/Header";
import { FakeDOM } from "./src/core/fakeDOM";
import "./style.css";

(() => {
  const root = FakeDOM.createRoot(document.getElementById("root")!);

  console.log(Header().render());
  // if (!root) {
  //   throw new Error("root not found");
  // }

  // root.appendChild(render(Header()));
})();
