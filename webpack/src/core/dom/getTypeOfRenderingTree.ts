import { RenderingTree } from "../../interfaces/RenderingTree";

export function getTypeOfRenderingTree(
  renderingTree: RenderingTree
): "text" | "element" | "use" {
  return typeof renderingTree === "string"
    ? "text"
    : "type" in renderingTree
    ? renderingTree.type
    : "use";
}