import { IChildren } from "./IChildren";
import { ITagName } from "./ITagName";

export interface IFakeElement {
  tagName: ITagName;
  props?: {};
  children?: IChildren;
  textContent?: TextContent;
  render: () => Element;
}
