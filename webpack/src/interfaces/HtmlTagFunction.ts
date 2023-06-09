import { Attrs } from "./Attrs";
import { Children } from "./Children";
import { ElementRenderingTree } from "./ElementRenderingTree";

export interface HtmlTagFunction {
  (attrs: Attrs, children: Children): ElementRenderingTree;
  (attrs: Attrs): ElementRenderingTree;
  (children: Children): ElementRenderingTree;
}
