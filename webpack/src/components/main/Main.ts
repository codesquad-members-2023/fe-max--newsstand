
import { CreateFakeElementHelper } from "../../utils/CreateFakeElementHelper";
import { IFakeElement } from "../../interfaces/IFakeElement";

import { Grid } from "./grid/Grid";
import { List } from "./list/List";

import list from "../../images/icon/list.svg";
import listBlur from "../../images/icon/list-blur.svg";
import grid from "../../images/icon/grid.svg";
import gridBlur from "../../images/icon/grid-blur.svg";

const { main, h2, div, ul, li, a, img } = CreateFakeElementHelper;

export function Main(): IFakeElement {
  return main([
    h2({ class: "blind" }, "메인"),
    div({ class: "tabs-bar" }, [
      ul({ class: "article" }, [
        li({ class: "active" }, [a({ href: "" }, "전체 언론사")]),
        li([a({ href: "" }, "내가 구독한 언론사")]),
      ]),
      ul({ class: "view-type" }, [
        li([
          a({ class: "active", href: "" }, [
            img({ src: list, alt: "목록 아이콘" }),
            img({ src: listBlur, alt: "흐린 목록 아이콘" }),
          ]),
        ]),
        li([
          a({ href: "" }, [
            img({ src: gridBlur, alt: "격자 아이콘" }),
            img({ src: grid, alt: "흐린 격자 아이콘" }),
          ]),
        ]),
      ]),
    ]),
    List(),
  ]);
}
