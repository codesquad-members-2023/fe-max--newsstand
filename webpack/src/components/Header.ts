import { IFakeElement } from "../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../utils/CreateFakeElementHelper";
import logo from "../images/icon/logo.svg";

const { header, div, h1, img, span, p } = CreateFakeElementHelper;

export function Header(): IFakeElement {
  return header([
    div({ class: "inner" }, [
      h1({ class: "logo" }, [
        img({ src: logo, alt: "뉴스스탠드 아이콘" }),
        span("뉴스스탠드"),
      ]),
      p({ class: "date" }, "XXXX. XX. XX. X요일"),
    ]),
  ]);
}
