import { Store } from "../core/Store";
import { state } from "../interfaces/state";

export const { getGlobalStore, setGlobalStore } = (function () {
  let store: Store<state>;

  const getGlobalStore = () => store;
  const setGlobalStore = (_store: Store<state>) => {
    store = _store;
  };

  return {
    getGlobalStore,
    setGlobalStore,
  };
})();
