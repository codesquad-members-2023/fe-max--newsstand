import { getHtmlTags } from "../utils/getHtmlTags";
import { $ } from "./dom";
import {
  Attrs,
  ElementRenderingTree,
  HtmlTagFunction,
  RenderingTree,
} from "./types";

export const htmlTags = getHtmlTags();

type HtmlTags = (typeof htmlTags)[number];
type HtmlTagFunctions = {
  [K in HtmlTags]: HtmlTagFunction;
};

export function generateTagHelper() {
  const helper: Partial<HtmlTagFunctions> = {};

  htmlTags.forEach((tag) => {
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
