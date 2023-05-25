import Component from "@components/common/Component.ts";
import { getDateString } from "@utils/index.ts";

class TopHeader extends Component {
  constructor() {
    const topElement = TopHeader.createDOM();
    super(topElement);
  }

  private static createDOM() {
    const topElement = document.createElement("header");
    topElement.className = "header-container";

    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";
    const img = document.createElement("img");
    img.src = "src/assets/newspaper.svg";
    img.alt = "News Stand";
    const h1 = document.createElement("h1");
    h1.innerText = "뉴스스탠드";
    titleContainer.append(img, h1);

    const dateContainer = document.createElement("span");
    dateContainer.className = "date-container";
    dateContainer.innerText = getDateString(new Date()); // move to store.

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/TopHeader/TopHeader.scss"
    );

    topElement.append(titleContainer, dateContainer, stylesheetLink);
    return topElement;
  }
}

customElements.define("top-header", TopHeader);
