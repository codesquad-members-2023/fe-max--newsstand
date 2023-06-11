import { IFakeElement } from '../../interfaces/IFakeElement';
import { CreateFakeElementHelper } from "../../utils/CreateFakeElementHelper";

import { RollingBar } from "./rollingBar/RollingBar";
import logo from "../../images/icon/logo.svg";
import { useContext } from "../../hooks/useContext";
import { Store } from "../../core/Store";
import { setContext } from "../../hooks/setContext";

const { header, div, h1, img, span, p } = CreateFakeElementHelper;

export function Header(): IFakeElement {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    second: "numeric",
  };

  return setContext("date", header([
    div({ class: "inner" }, [
      h1({ class: "logo" }, [
        img({ src: logo, alt: "뉴스스탠드 아이콘" }),
        span("뉴스스탠드"),
      ]),
      p(
        { class: "date" },
        useContext(
          "date", 
          "textContent", 
          function(date: Date): string {
            return date.toLocaleDateString("ko-KR", options);
          }
        )
      ),
    ]),
    RollingBar(),
  ]))
}
