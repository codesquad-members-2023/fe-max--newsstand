import { IFakeElement } from "../interfaces/IFakeElement";

export const FakeDom = (function () {
  let _root: null | HTMLElement = null;

  return {
    createRoot: function (root: HTMLElement) {
      _root = root;
      return this;
    },
    get root() {
      return _root;
    },
    render: function (fakeElement: IFakeElement) {
      _root?.replaceChildren(fakeElement.render());
    },
  };
})();
