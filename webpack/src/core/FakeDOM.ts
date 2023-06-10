import { IFakeElement } from "../interfaces/IFakeElement";

function render(fakeElement: IFakeElement) {

  

}

function createRoot(root: HTMLElement) {
  return {
    render,
  };
}

export const FakeDOM = (function () {
  return {
    createRoot,
  };
})();
