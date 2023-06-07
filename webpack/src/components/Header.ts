import { TagHelper } from "../core/TagHelper";
import logo from "../images/icon/logo.svg";
import { Rolling } from "./Rolling";

export const Header = ({ date }: { date: Date }) => {
  const { header, div, h1, h2, img, span, p, ul, li, a } = TagHelper;
  type DateOptions = {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
    day?: "numeric" | "2-digit";
    weekday?: "narrow" | "short" | "long";
  };
  const options: DateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };
  return header([
    div({ class: "inner" }, [
      h1({ class: "logo" }, [
        img({ src: logo, alt: "뉴스스탠드 아이콘" }),
        span(["뉴스스탠드"]),
      ]),
      p({ class: "date" }, [date.toLocaleDateString("ko-KR", options)]),
    ]),
    ul({ class: "rolling-bar" }, [
      li([h2({ class: "blind" }, ["연합뉴스 헤드라인"]), Rolling()]),
      li([h2({ class: "blind" }, ["연합뉴스 헤드라인"]), Rolling()]),
    ]),
  ]);
};
