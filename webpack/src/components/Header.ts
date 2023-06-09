import { Store } from "../core/Store";
import { TagHelper } from "../core/TagHelper";
import { State } from "../interfaces/State";
import { DateIndicator } from "./DateIndicator";
import { Rolling } from "./Rolling";
import logo from "../images/icon/logo.svg";

export const Header = ({ date }: {date: Date}) => {
  const { header, div, h1, h2, img, span, ul, li } = TagHelper;
  return header([
    div({ class: "inner" }, [
      h1({ class: "logo" }, [
        img({ src: logo, alt: "뉴스스탠드 아이콘" }),
        span(["뉴스스탠드"]),
      ]),
      DateIndicator({ date }),
    ]),
    ul({ class: "rolling-bar" }, [
      li([h2({ class: "blind" }, ["연합뉴스 헤드라인"]), Rolling()]),
      li([h2({ class: "blind" }, ["연합뉴스 헤드라인"]), Rolling()]),
    ]),
  ]);
};
