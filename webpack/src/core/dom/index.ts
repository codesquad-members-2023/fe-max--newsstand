import { Attrs } from "../../interfaces/Attrs";
import { Children } from "../../interfaces/Children";
import { ElementRenderingTree } from "../../interfaces/ElementRenderingTree";

export function $(tagName: string): ElementRenderingTree;
export function $(tagName: string, attrs: Attrs): ElementRenderingTree;
export function $(tagName: string, children: Children): ElementRenderingTree;
export function $(
  tagName: string,
  attrs: Attrs,
  children: Children
): ElementRenderingTree;
export function $(
  tagName: string,
  attrsOrChildren?: Attrs | Children,
  children?: Children
): ElementRenderingTree {
  let attrs: Attrs = {};
  let childrenList: Children = [];

  if (attrsOrChildren) {
    if (Array.isArray(attrsOrChildren)) {
      childrenList = attrsOrChildren;
    } else {
      attrs = attrsOrChildren;
      childrenList = children || [];
    }
  }

  return {
    type: "element",
    tagName: tagName || "DIV",
    attrs,
    children: childrenList,
  };
}
