import { CallBack } from "../types/Callback";
import { IChildren } from "./IChildren";
import { ITagName } from "./ITagName";

export interface IFakeElement {
  tagName: ITagName;
  props?: {};
  children?: IChildren;
  textContent?: TextContent;
  prevElement?: Element | null;
  functions?: CallBack[];
  render: () => Element;
  parent?: IFakeElement;
  combined?: {
    props?: Record<string, any>;
    context?: Record<string, any>;
  };
  subscribeContext?: Record<string, CallBack[]>;
}
