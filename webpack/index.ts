import { Store } from "./src/core/Store";
import { state } from "./src/interfaces/state";
import { AppRecipe } from "./src/recipes/AppRecipe";
import { setGlobalStore } from "./src/utils/globalStore";
import { RollingTurn } from "./src/constants/RollingTurn";
import { initRollingNews } from "./src/utils/initRollingNews";
import logo from "./src/images/icon/logo.svg";
import "./style.css";

(async () => {
  const link: HTMLElement | null = document.querySelector("link[rel*='icon']");
  if (link) {
    link.setAttribute("href", logo);
  }
  const root: HTMLElement | null = document.getElementById("root");

  const store = new Store<state>({
    date: new Date(),
    leftRollingNews: { news: [] },
    rightRollingNews: { news: [] },
    rollingTurn: RollingTurn.Left,
    leftRollingNewsIndex: 0,
    rightRollingNewsIndex: 0,
    fetchFirstRollingNews: false,
    rollingFlag: true,
  });
  setGlobalStore(store);
  initRollingNews();

  setInterval(() => {
    if (store.state.rollingFlag) {
      if (store.state.rollingTurn === RollingTurn.Left) {
        store.state.leftRollingNewsIndex += 1;
      } else {
        store.state.rightRollingNewsIndex += 1;
      }

      store.state.rollingTurn =
        store.state.rollingTurn === RollingTurn.Left
          ? RollingTurn.Right
          : RollingTurn.Left;
    }
  }, 1000);

  const dateSetInterval = setInterval(() => {
    store.state.date = new Date();
  }, 1000);

  const appComponent = new AppRecipe().cook();

  root?.append(appComponent.element);
})();
