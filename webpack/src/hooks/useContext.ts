import { IFakeElement } from "../interfaces/IFakeElement";
import { CallBack } from "../types/Callback";

export function useContext(name: string, type?: string, callBack?: CallBack) {
  let first = true;
  return function (this: IFakeElement, element: Element): void {
    let current: IFakeElement = this;
    let foundContext: any = undefined;

    while (current) {
      if (
        current &&
        current.combined &&
        current.combined.context &&
        current.combined.context[name]
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
          element.textContent = foundContext ? callBack!(foundContext)! : "";
          return;
      }
    }

    if (first) {
      current?.subscribeContext![name].push(func);
      first = false;
    }

    func();
  };
}
