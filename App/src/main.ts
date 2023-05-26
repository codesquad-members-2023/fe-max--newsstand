import { Store } from "./core/Store";
import { state } from "./interfaces/state";
import { AppRecipe } from "./recipes/AppRecipe";
import { setGlobalStore } from "./utils/globalStore";
import "./style.css";
import { RollingTurn } from "./constants/RollingTurn";
import { initRollingNews } from "./utils/initRollingNews";

(async () => {
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

  // setInterval(() => {
  //   getRollingNews().then((news) => {
  //     store.state.rollingNews = news;
  //   });
  // }, 5000)

  const dateSetInterval = setInterval(() => {
    store.state.date = new Date();
  }, 1000);

  const appComponent = new AppRecipe().cook();

  root?.append(appComponent.element);
})();
