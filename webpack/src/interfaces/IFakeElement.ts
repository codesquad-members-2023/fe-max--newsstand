import { Callback } from "../types/Callback";
import { IChildren } from "./IChildren";
import { ITagName } from "./ITagName";

export interface IFakeElement {
  tagName: ITagName;
  props?: Record<string, any>;
  children?: IChildren;
  textContent?: TextContent;
  prevElement?: Element | null;
  functions?: Callback[];
  render: () => Promise<Element>;
  parent?: IFakeElement;
  combined?: {
    props?: Record<string, any>;
    context?: Record<string, any>;
  };
  observers?: Record<string, Callback[]>;
}
