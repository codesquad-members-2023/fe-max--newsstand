import Component from "@components/common/Component.ts";
import RecentHeadline from "./RecentHeadline.ts";
import { THeadlineData } from "@customTypes/index.ts";
import { observeStates, dispatch } from "@store/index.ts";

type THeadlinesProps = {
  leftHeadlineProps: THeadlineData;
  rightHeadlineProps: THeadlineData;
};

export default class HeadlinesContainer extends Component {
  private leftHeadline: RecentHeadline;
  private rightHeadline: RecentHeadline;
  private readonly intervalId: number;

  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "headlines-container";

    const leftHeadline = document.createElement(
      "recent-headline"
    ) as RecentHeadline;

    const rightHeadline = document.createElement(
      "recent-headline"
    ) as RecentHeadline;

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/RecentHeadline/HeadlinesContainer.scss"
    );

    topElement.append(leftHeadline, rightHeadline, stylesheetLink);

    super(topElement);
    this.leftHeadline = leftHeadline;
    this.rightHeadline = rightHeadline;

    observeStates(this, "headlinesRollerTick");
    dispatch({ type: "headlinesRollerTick" });

    this.intervalId = window.setInterval(() => {
      dispatch({ type: "headlinesRollerTick" });
    }, 1000);
  }

  setProps({ leftHeadlineProps, rightHeadlineProps }: THeadlinesProps) {
    this.leftHeadline.setHeadlineData(leftHeadlineProps);
    this.rightHeadline.setHeadlineData(rightHeadlineProps);
  }

  disconnectedCallback() {
    window.clearInterval(this.intervalId);
  }
}

customElements.define("headlines-container", HeadlinesContainer);
