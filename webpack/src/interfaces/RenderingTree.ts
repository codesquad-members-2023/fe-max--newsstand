import { ElementRenderingTree } from "./ElementRenderingTree";
import { UseRenderingTree } from "./UseRenderingTree";

export type RenderingTree = string | ElementRenderingTree | UseRenderingTree;
