import { IFakeElement } from "../interfaces/IFakeElement";
import { Callback } from "../types/Callback";

export function useContext(name: string, type?: string, callback?: Callback) {
  let first = true;
  return function (this: IFakeElement, element: Element): void {
    const fakeElement = this;

    let current: IFakeElement = this;
    let foundContext: any = undefined;

    while (current) {
      if (
        current &&
        current.combined &&
        current.combined.context &&
        current.combined.context[name] !== undefined
      ) {
        break;
      }
      current = current.parent!;
    }

    function func() {
      foundContext = current.combined!.context![name];

      if (!type) {
        element.textContent = foundContext ? foundContext : "";
      }

      switch (type) {
        case "textContent":
          element.textContent = foundContext ? callback!(foundContext)! : "";
          return;
        case "render":
          if (!callback) {
            fakeElement.render();
            return;
          }
          if (callback()) {
            fakeElement.render();
            return;
          }
        case "prop":
          if (callback) {
            callback(element, foundContext);
          }
          return;
      }
    }

    if (first) {
      current?.subscribeContext![name].push(func);
      first = false;
      func();
    }

    if (!type || type === "textContent") {
      func();
    }
  };
}
