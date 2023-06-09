import { RenderingTree } from "./RenderingTree";

export interface SyncOptions {
  target: Node | null;
  replace: (newNode: Node) => void;
  renderingTree: RenderingTree;
  prevRenderingTree?: RenderingTree;
}