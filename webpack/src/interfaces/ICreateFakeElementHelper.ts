import { PropsOrChildrenOrTextContent } from "../types/PropsOrChildrenOrTextContent";
import { TagName } from "../types/TagName";
import { IFakeElement } from "./IFakeElement";

export interface ICreateFakeElementHelper {
  [tagName: string]: (
    ...args: PropsOrChildrenOrTextContent[]
  ) => IFakeElement;
}
