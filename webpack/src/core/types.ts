export type Dispose = () => void;
export type UseFn = () => Dispose | void;
export type Attrs = Record<string, string>;
export type Children = RenderingTree[];
export type ElementRenderingTree = {
  type: "element";
  tagName: string;
  attrs: Record<string, string>;
  children: RenderingTree[];
};
export type UseRenderingTree = {
  type: "use";
  dependencies: any[];
  useFn: UseFn;
  children: RenderingTree[];
  use: (fn: UseFn, dependencies: any[]) => UseRenderingTree;
  dispose?: Dispose;
  render: (
    renderingTree: Exclude<RenderingTree, UseRenderingTree>
  ) => RenderingTree;
};
export type RenderingTree = string | ElementRenderingTree | UseRenderingTree;
export type SyncOptions = {
  target: Node | null;
  replace: (newNode: Node) => void;
  renderingTree: RenderingTree;
  prevRenderingTree: RenderingTree | undefined;
};

export type Action = {
  type: "newsRollerTick";
};
export type HtmlTagFunction = {
  (attrs: Attrs, children: RenderingTree[]): ElementRenderingTree;
  (attrs: Attrs): ElementRenderingTree;
  (children: RenderingTree[]): ElementRenderingTree;
};