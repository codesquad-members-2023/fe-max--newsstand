import Component from "@components/common/Component.ts";

class NewsStand extends Component {
  constructor() {
    const topElement = NewsStand.createDOM();
    super(topElement);
  }

  private static createDOM() {
    const topElement = document.createElement("div");

    // const topHeader = document.createElement("top-header");
    // const recentHeadlines = document.createElement("recent-headlines");
    // const mainNews = document.createElement("main-news");

    const stylesheetLink = NewsStand.createStylesheetLink();

    topElement.append(stylesheetLink);
    return topElement;
  }

  private static createStylesheetLink() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "src/components/NewsStand/NewsStand.scss";
    return link;
  }
}

customElements.define("news-stand", NewsStand);
