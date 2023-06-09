import { HtmlTagName } from "../constants/HtmlTag";
import { Attrs } from "../interfaces/Attrs";
import { ElementRenderingTree } from "../interfaces/ElementRenderingTree";
import { HtmlTagFunctions } from "../interfaces/HtmlTagFunctions";
import { RenderingTree } from "../interfaces/RenderingTree";
import { $ } from "./nDom";

export function generateTagHelper() {
  const helper: Partial<HtmlTagFunctions> = {};

  Object.values(HtmlTagName).forEach((tag) => {
    helper[tag] = (
      first?: Attrs | RenderingTree[],
      second?: RenderingTree[]
    ): ElementRenderingTree => {
      if (!first) {
        return $(tag);
      } else if (Array.isArray(first)) {
        return $(tag, first);
      } else if (second) {
        return $(tag, first, second);
      } else {
        return $(tag, first);
      }
    };
  });

  return helper as HtmlTagFunctions;
}

export const TagHelper = generateTagHelper();
