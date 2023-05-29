import Component from "@components/common/Component.ts";

export type THeadlineData = {
  pressName: string;
  headline: string;
};

export default class RecentHeadline extends Component {
  private topElement: HTMLElement;
  private currHeadlineWrapper: HTMLElement;

  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "headline-container";

    const currHeadlineWrapper = document.createElement("div");
    currHeadlineWrapper.className = "headline-wrapper";

    const pressEl = document.createElement("span");
    pressEl.className = "press-name";

    const headlineEl = document.createElement("a");
    headlineEl.className = "headline";
    headlineEl.href = "";

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/RecentHeadline/RecentHeadline.scss"
    );

    currHeadlineWrapper.append(pressEl, headlineEl);
    topElement.append(stylesheetLink, currHeadlineWrapper);

    super(topElement);
    this.topElement = topElement;
    this.currHeadlineWrapper = currHeadlineWrapper;
  }

  update(newHeadlineData: THeadlineData) {
    const nextHeadlineWrapper = this.createHeadlineWrapper(newHeadlineData);
    this.topElement.appendChild(nextHeadlineWrapper);

    this.currHeadlineWrapper.classList.add("move-up");
    nextHeadlineWrapper.classList.add("move-up");

    this.currHeadlineWrapper.addEventListener(
      "transitionend",
      () => {
        this.currHeadlineWrapper.remove();
        this.currHeadlineWrapper = nextHeadlineWrapper;
        nextHeadlineWrapper.classList.remove("move-up");
      },
      { once: true }
    );
  }

  createHeadlineWrapper({ pressName, headline }: THeadlineData) {
    const headlineWrapper = document.createElement("div");
    headlineWrapper.className = "headline-wrapper";

    const pressEl = document.createElement("span");
    pressEl.className = "press-name";
    pressEl.textContent = pressName;

    const headlineEl = document.createElement("a");
    headlineEl.className = "headline";
    headlineEl.textContent = headline;
    headlineEl.href = "";

    headlineWrapper.append(pressEl, headlineEl);
    return headlineWrapper;
  }

  setHeadlineData(newVal: THeadlineData) {
    this.dataset.headlineContent = JSON.stringify(newVal);
  }

  static get observedAttributes() {
    return ["data-headline-content"];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    if (oldVal === newVal) return;

    if (name === "data-headline-content") {
      this.update(JSON.parse(newVal));
    }
  }
}

customElements.define("recent-headline", RecentHeadline);
