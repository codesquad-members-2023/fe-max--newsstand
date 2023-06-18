import { Store } from "../core/Store";
import { IFakeElement } from "../interfaces/IFakeElement";
import { Callback } from "../types/Callback";

export function setContext(name: string) {
  return function (this: IFakeElement): IFakeElement {
    const fakeElement = this;
    fakeElement.combined = fakeElement.combined || {};
    fakeElement.combined.context = fakeElement.combined.context || {};
    fakeElement.combined.context[name] = Store.state[name];
    fakeElement.observers = fakeElement.observers || {};
    fakeElement.observers[name] = [] as Callback[];

    Store.subscribe(name, () => {
      fakeElement.combined!.context![name] = Store.state[name];
      fakeElement.observers![name].forEach((callback: Callback) => {
        callback();
      });
    });

    return fakeElement;
  };
}
