import { CreateFakeElementHelper } from "../../utils/CreateFakeElementHelper";
import { IFakeElement } from "../../interfaces/IFakeElement";

import { Grid } from "./grid/Grid";
import { List } from "./list/List";

import list from "../../images/icon/list.svg";
import listBlur from "../../images/icon/list-blur.svg";
import grid from "../../images/icon/grid.svg";
import gridBlur from "../../images/icon/grid-blur.svg";
import { useContext } from "../../hooks/useContext";
import { setContext } from "../../hooks/setContext";
import { Store } from "../../core/Store";
import { Dispatcher } from "../../core/Dispatcher";
import { useIf } from "../../hooks/useIf";

const { main, h2, div, ul, li, button, img } = CreateFakeElementHelper;

export function Main(): IFakeElement {
  return main(setContext("activePress"), setContext("viewType"), [
    h2({ class: "blind" }, "메인"),
    div(
      useContext("activePress", "attr", (element, context) => {
        element.setAttribute("data-press", context);
      }),
      useContext("viewType", "attr", (element, context) => {
        element.setAttribute("data-view-type", context);
      }),
      { class: "tabs-bar" },
      [
        ul({ class: "article" }, [
          li([button({ onClick: activeAllPressHandler }, "전체 언론사")]),
          li([
            button(
              { onClick: activeSubscribePressHandler },
              "내가 구독한 언론사"
            ),
          ]),
        ]),
        ul({ class: "view-type" }, [
          li([
            button({ onClick: activeViewTypeListHandler }, [
              img({ src: list, alt: "목록 아이콘" }),
              img({ src: listBlur, alt: "흐린 목록 아이콘" }),
            ]),
          ]),
          li([
            button({ onClick: activeViewTypeGridHandler }, [
              img({ src: gridBlur, alt: "격자 아이콘" }),
              img({ src: grid, alt: "흐린 격자 아이콘" }),
            ]),
          ]),
        ]),
      ]
    ),
    // Grid(),
    // List(),
    div(
      useContext("viewType", "render"),
      { class: "inner" },
      useIf(isGrid, [Grid()], [List()])
    ),
  ]);
}
//
function isGrid(): boolean {
  return Store.state.viewType === "GRID";
}

function activeAllPressHandler() {
  Dispatcher.onAction({ type: "activeAllPress" });
}

function activeSubscribePressHandler() {
  Dispatcher.onAction({ type: "activeSubscribePress" });
}

function activeViewTypeGridHandler() {
  Dispatcher.onAction({ type: "activeViewTypeGrid" });
}

function activeViewTypeListHandler() {
  Dispatcher.onAction({ type: "activeViewTypeList" });
}
