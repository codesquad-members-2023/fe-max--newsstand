import { $ } from "./domdom";
import {
  Attrs,
  ElementRenderingTree,
  HtmlTagFunction,
  RenderingTree,
} from "./types";

export function generateTagHelper() {
  const htmlTags = [
    "div",
    "span",
    "h1",
    "h2",
    "p",
    "a",
    "img",
    "button",
    "ul",
    "li",
    "input",
    "form",
  ] as const;
  type HtmlTags = (typeof htmlTags)[number];
  type HtmlTagFunctions = {
    [K in HtmlTags]: HtmlTagFunction;
  };
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
  return helper;
}

export const tagHelper = generateTagHelper();
