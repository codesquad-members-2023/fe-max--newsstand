import { Store } from "../core/Store";
import { IFakeElement } from "../interfaces/IFakeElement";
import { CallBack } from "../types/Callback";

export function setContext(name: string) {
  return function (this: IFakeElement) {
    const fakeElement = this;
    fakeElement.combined = fakeElement.combined || {};
    fakeElement.combined.context = fakeElement.combined.context || {};
    fakeElement.combined.context[name] = Store.state[name];
    fakeElement.subscribeContext = fakeElement.subscribeContext || {};
    fakeElement.subscribeContext[name] = [] as CallBack[];

    Store.subscribe(name, () => {
      fakeElement.combined!.context![name] = Store.state[name];
      fakeElement.subscribeContext![name].forEach((func: CallBack) => {
        func();
      });
    });

    return fakeElement;
  };
}
