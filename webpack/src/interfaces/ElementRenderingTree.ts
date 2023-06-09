import { Attrs } from "./Attrs";
import { Children } from "./Children";

export interface ElementRenderingTree {
  type: "element";
  tagName: string;
  attrs: Attrs;
  children: Children;
}
