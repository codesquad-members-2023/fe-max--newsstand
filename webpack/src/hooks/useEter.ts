import { IChildren } from "../interfaces/IChildren";
import { IFakeElement } from "../interfaces/IFakeElement";
import { assignFakeElement } from "../utils/createFakeElement";

export function useIter(source: IFakeElement, repeat: number) {
  return function (this: IFakeElement) {
    const children: IChildren = [];
    for (let i = 0; i < repeat; i++) {
      const fakeElement = source;
      children.push(fakeElement);
    }
    assignFakeElement(this, children);
  };
}
