import Component from "@components/common/Component.ts";

class NewsStand extends Component {
  constructor() {
    const topElement = NewsStand.createDOM();
    super(topElement);
  }

  private static createDOM() {
    const topElement = document.createElement("div");

    const topHeader = document.createElement("top-header");
    // const recentHeadlines = document.createElement("recent-headlines");
    // const mainNews = document.createElement("main-news");

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/NewsStand/NewsStand.scss"
    );

    topElement.append(topHeader, stylesheetLink);
    return topElement;
  }
}

customElements.define("news-stand", NewsStand);
