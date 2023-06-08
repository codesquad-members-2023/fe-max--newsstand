import { TagHelper } from "../core/TagHelper";
import listIcon from "../images/icon/list.svg";
import listBlurIcon from "../images/icon/list-blur.svg";
import gridIcon from "../images/icon/grid.svg";
import gridBlurIcon from "../images/icon/grid-blur.svg";
import { Grid } from "./Grid";

export const Main = () => {
  const { main, h2, div, ul, li, a, button, img } = TagHelper;

  return main([
    h2({ class: "blind" }, ["메인"]),
    div({ class: "tabs-bar" }, [
      ul({ class: "article" }, [
        li([
          button({ class: "article" }, ["전체 언론사"]),
          button({ class: "article" }, ["내가 구독한 언론사"]),
        ]),
      ]),
      ul({ class: "view-type" }, [
        li([
          button({ class: "article" }, [
            img({ src: listIcon, alt: "목록 아이콘" }),
            img({ src: listBlurIcon, alt: "흐린 목록 아이콘" }),
          ]),
          button({ class: "article" }, [
            img({ src: gridIcon, alt: "격자 아이콘" }),
            img({ src: gridBlurIcon, alt: "흐린 격자 아이콘" }),
          ]),
        ]),
      ]),
    ]),
    Grid(),
  ]);
};
