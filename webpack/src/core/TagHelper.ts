import { HtmlTagName } from "../constants/HtmlTag";
import { Attrs } from "../interfaces/Attrs";
import { ElementRenderingTree } from "../interfaces/ElementRenderingTree";
import { HtmlTagFunctions } from "../interfaces/HtmlTagFunctions";
import { RenderingTree } from "../interfaces/RenderingTree";
import { $ } from "./dom/index";

export function generateTagHelper() {
  const helper: Partial<HtmlTagFunctions> = {};

  Object.values(HtmlTagName).forEach((tag) => {
    helper[tag] = (
      first?: Attrs | RenderingTree[],
      second?: RenderingTree[]
    ): ElementRenderingTree => {
      return !first
        ? $(tag)
        : Array.isArray(first)
        ? $(tag, first)
        : second
        ? $(tag, first, second)
        : $(tag, first);
    };
  });

  return helper as HtmlTagFunctions;
}

export const TagHelper = generateTagHelper();
