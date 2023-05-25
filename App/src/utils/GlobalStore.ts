export const { getGlobalStore, setGlobalStore } = (function () {
  let store: any;

  const getGlobalStore = () => store;
  const setGlobalStore = (_store: any) => {
    store = _store;
  };

  return {
    getGlobalStore,
    setGlobalStore,
  };
})();
