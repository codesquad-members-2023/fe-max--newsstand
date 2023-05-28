import Component from "@components/common/Component.ts";

export type THeadlineData = {
  pressName: string;
  headline: string;
};

export default class RecentHeadline extends Component {
  private pressEl: HTMLElement;
  private headlineEl: HTMLElement;

  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "headline-container";

    const pressEl = document.createElement("span");
    pressEl.className = "press-name";
    pressEl.textContent = "Some Press"; // receive as props.

    const headlineEl = document.createElement("a");
    headlineEl.className = "headline";
    headlineEl.textContent = "breaking news: something happened"; // receive as props.
    headlineEl.href = "";

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/RecentHeadline/RecentHeadline.scss"
    );

    topElement.append(pressEl, headlineEl, stylesheetLink);

    super(topElement);
    this.pressEl = pressEl;
    this.headlineEl = headlineEl;
  }

  update({ pressName, headline }: THeadlineData) {
    this.pressEl.textContent = pressName;
    this.headlineEl.textContent = headline;
  }

  setHeadlineData(newVal: THeadlineData) {
    this.dataset.headlineContent = JSON.stringify(newVal);
  }

  static get observedAttributes() {
    return ["data-headline-content"];
  }

  attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    if (name === "data-headline-content") {
      this.update(JSON.parse(newVal));
    }
  }
}

customElements.define("recent-headline", RecentHeadline);
