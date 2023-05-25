import Component from "@components/common/Component.ts";

class NewsStand extends Component {
  constructor() {
    const topElement = NewsStand.createDOM();
    super(topElement);
  }

  private static createDOM() {
    const topElement = document.createElement("div");

    const topHeader = document.createElement("top-header");

    const recentHeadlinesContainer = document.createElement("div");
    recentHeadlinesContainer.className = "headlines-container";
    const recentHeadlineLeft = document.createElement("recent-headline");
    const recentHeadlineRight = document.createElement("recent-headline");
    recentHeadlinesContainer.append(recentHeadlineLeft, recentHeadlineRight);

    // const mainNews = document.createElement("main-news");

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/NewsStand/NewsStand.scss"
    );

    topElement.append(topHeader, recentHeadlinesContainer, stylesheetLink);
    return topElement;
  }
}

customElements.define("news-stand", NewsStand);
