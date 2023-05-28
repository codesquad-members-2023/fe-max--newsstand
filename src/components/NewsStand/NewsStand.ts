import Component from "@components/common/Component.ts";
import TopHeader from "@components/TopHeader/TopHeader";
import HeadlinesContainer from "@components/RecentHeadline/HeadlinesContainer";

class NewsStand extends Component {
  private topHeader: TopHeader;
  private headlinesContainer: HeadlinesContainer;

  constructor() {
    const topElement = document.createElement("div");

    const topHeader = document.createElement("top-header") as TopHeader;

    const headlinesContainer = document.createElement(
      "headlines-container"
    ) as HeadlinesContainer;

    // const mainNews = document.createElement("main-news");

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/NewsStand/NewsStand.scss"
    );

    topElement.append(topHeader, headlinesContainer, stylesheetLink);

    super(topElement);
    this.topHeader = topHeader;
    this.headlinesContainer = headlinesContainer;
    // this.mainNews = mainNews;
  }

  connectedCallback() {
    // call `.update` of views.
    // this.topHeader.update();
    // this.headlinesContainer.update();
  }
}

customElements.define("news-stand", NewsStand);
