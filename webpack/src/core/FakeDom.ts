import { IFakeElement } from "../interfaces/IFakeElement";
import { State } from "./State";

export const FakeDom = (function () {
  let _root: null | HTMLElement = null;
  const state = State;

  return {
    createRoot: function (root: HTMLElement) {
      _root = root;
      return this;
    },
    get root() {
      return _root;
    },
    render: async function (fakeElement: IFakeElement) {
      _root?.replaceChildren(await fakeElement.render());
    },
  };
})();
