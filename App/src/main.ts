import { Store } from "./core/Store";
import { AppRecipe } from "./recipes/AppRecipe";
import "./style.css";
import { setGlobalStore } from "./utils/GlobalStore";

(() => {
  const root: HTMLElement | null = document.getElementById("root");

  const store = new Store({
    date: new Date(),
  });

  setGlobalStore(store);

  const dateSetInterval = setInterval(() => {
    store.state.date = new Date();
  }, 1000);

  const appComponent = new AppRecipe().cook();

  root?.append(appComponent.element);
})();
