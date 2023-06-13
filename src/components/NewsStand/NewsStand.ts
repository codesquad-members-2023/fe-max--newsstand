import Component from "@components/common/Component.ts";

class NewsStand extends Component {
  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "newsstand-container";

    const topHeader = document.createElement("top-header");

    const headlinesContainer = document.createElement("headlines-container");

    const mainNews = document.createElement("main-news");

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/NewsStand/NewsStand.scss"
    );

    topElement.append(topHeader, headlinesContainer, mainNews, stylesheetLink);

    super(topElement);
  }
}

customElements.define("news-stand", NewsStand);
