import Component from "@components/common/Component.ts";

class RecentHeadline extends Component {
  constructor() {
    const topElement = RecentHeadline.createDOM();
    super(topElement);
  }

  private static createDOM() {
    const topElement = document.createElement("div");
    topElement.className = "headline-container";

    const press = document.createElement("span");
    press.className = "press-name";
    press.textContent = "Some Press"; // receive as props.

    const headline = document.createElement("a");
    headline.className = "headline";
    headline.textContent = "breaking news: something happened"; // receive as props.
    headline.href = "";

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/RecentHeadline/RecentHeadline.scss"
    );

    topElement.append(press, headline, stylesheetLink);
    return topElement;
  }
}

customElements.define("recent-headline", RecentHeadline);
