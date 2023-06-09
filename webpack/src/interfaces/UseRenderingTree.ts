import { Children } from "./Children";
import { Dispose } from "./Dispose";
import { RenderingTree } from "./RenderingTree";
import { UseFn } from "./UseFn";

export interface UseRenderingTree {
  type: "use";
  dependencies: any[];
  useFn: UseFn;
  children: Children;
  use: (fn: UseFn, dependencies: any[]) => UseRenderingTree;
  dispose?: Dispose;
  render: (
    renderingTree: Exclude<RenderingTree, UseRenderingTree>
  ) => RenderingTree;
}