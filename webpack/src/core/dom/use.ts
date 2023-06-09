import { RenderingTree } from "../../interfaces/RenderingTree";
import { UseFn } from "../../interfaces/UseFn";
import { UseRenderingTree } from "../../interfaces/UseRenderingTree";

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