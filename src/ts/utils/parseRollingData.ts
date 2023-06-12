
import { parse } from "node-html-parser";

export const parseRollingData = (data:string) => {
  const dom = parse(data);
  return Array.from(dom.querySelectorAll("a.tit-wrap")).map(
    (titWrap) => {
      return {
        href: titWrap.getAttribute("href"),
        textContent: titWrap.textContent.trim(),
      };
    }
  );
};