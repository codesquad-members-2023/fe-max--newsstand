import { applyRenderingTreeToDom } from "./apply";
import { Attrs, Children, ElementRenderingTree, RenderingTree, UseFn, UseRenderingTree } from "./types";


export function getTypeOfRenderingTree(
  renderingTree: RenderingTree
): "text" | "element" | "use" {
  return typeof renderingTree === "string"
    ? "text"
    : "type" in renderingTree
    ? renderingTree.type
    : "use";
}

export let onAction: (action: any) => void = (_action) => {
  throw new Error("onAction is not set yet");
};

export function setUp<TState, TAction>(
  root: HTMLElement,
  state: TState,
  stateToRenderingTree: (state: TState) => RenderingTree,
  updateStateOnAction: (state: TState, action: TAction) => void
) {
  let prevRenderingTree: RenderingTree | undefined;
  const onStateChanged = () => {
    const renderingTree = stateToRenderingTree(state);
    applyRenderingTreeToDom(root, renderingTree, prevRenderingTree);
    prevRenderingTree = renderingTree;
  };

  onAction = (action: TAction) => {
    updateStateOnAction(state, action);
    onStateChanged();
  };

  onStateChanged();
}

export function use(fn: UseFn, dependencies: any[]): UseRenderingTree {
  return {
    type: "use",
    dependencies,
    useFn: fn,
    children: [],
    use,
    render(renderingTree: RenderingTree) {
      this.children = [renderingTree];
      return this;
    },
  };
}


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


