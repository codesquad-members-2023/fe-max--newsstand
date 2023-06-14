import { IChildren } from "../interfaces/IChildren";
import { IFakeElement } from "../interfaces/IFakeElement";
import { Callback } from "../types/Callback";
import { assignFakeElement } from "../utils/createFakeElement";

export function useIf(condition: Callback, ...returnChildren: IChildren[]) {
  const trueChildren = returnChildren[0];
  const falseChildren = returnChildren.length === 1 ? [] : returnChildren[1];
  return function (this: IFakeElement) {
    const children = condition() ? trueChildren : falseChildren;

    assignFakeElement(this, children);
  };
}
