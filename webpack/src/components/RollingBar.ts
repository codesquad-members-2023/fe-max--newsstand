import { RollingTurn } from "../constants/RollingTurn";
import { Component } from "../core/Component";
import { getGlobalStore } from "../utils/globalStore";
import { initRollingNews } from "../utils/initRollingNews";

export class RollingBar extends Component {
  private globalStore;
  constructor(tagName: string) {
    super(tagName);
    this.globalStore = getGlobalStore();
    this.globalStore.subscribe("fetchFirstRollingNews", () => {
      this.render();
    });
    this.globalStore.subscribe("leftRollingNewsIndex", () => {
      if (this.globalStore.state.rollingFlag) {
        this.rolling();
      }
    });
    this.globalStore.subscribe("rightRollingNewsIndex", () => {
      if (this.globalStore.state.rollingFlag) {
        this.rolling();
      }
    });
  }

  rolling() {
    const {
      rollingTurn,
      leftRollingNews,
      rightRollingNews,
      leftRollingNewsIndex,
      rightRollingNewsIndex,
    } = this.globalStore.state;

    const rollings = this.element.querySelectorAll(".rolling");
    const isLeft = rollingTurn === RollingTurn.Left ? true : false;
    const rolling = isLeft ? rollings[0] : rollings[1];
    const rollingNews = isLeft ? leftRollingNews : rightRollingNews;
    let rollingNewsIndex = isLeft
      ? leftRollingNewsIndex
      : rightRollingNewsIndex;
    const { news } = rollingNews;
    if (rollingNewsIndex === news.length) {
      this.globalStore.state.rollingFlag = false;
      rollingNewsIndex = 0;
      if (isLeft) {
        this.globalStore.state.leftRollingNewsIndex = 0;
        initRollingNews();
      } else {
        this.globalStore.state.rightRollingNewsIndex = 0;
      }

      this.globalStore.state.rollingFlag = true;
    }

    const { href, textContent } = news[rollingNewsIndex];

    const li = rolling.querySelector("li");
    const cloneLi = li?.cloneNode(true) as HTMLElement;
    cloneLi.className = "next";
    const article = cloneLi.querySelector(".article");
    if (article) {
      article.setAttribute("href", href);
      article.textContent = textContent;
    }
    rolling.append(cloneLi);
    if (li) {
      li.style.transform = "translateY(-100%)";
    }

    setTimeout(() => {
      cloneLi.style.top = "0%";
    }, 1);

    setTimeout(() => {
      li?.remove();
      cloneLi.className = "";
      cloneLi.removeAttribute("style");
    }, 300);
  }

  render() {
    const { leftRollingNews, rightRollingNews } = this.globalStore.state;
    const rollings = this.element.querySelectorAll(".rolling");
    rollings.forEach((rolling, i) => {
      const { href, textContent } =
        i == 0 ? leftRollingNews.news[0] : rightRollingNews.news[0];
      const article = rolling.querySelector(".article");
      if (article) {
        article.setAttribute("href", href);
        article.textContent = textContent;
      }
    });

    this.element.addEventListener("mouseover", () => {
      this.globalStore.state.rollingFlag = false;
    });
    this.element.addEventListener("mouseout", () => {
      this.globalStore.state.rollingFlag = true;
    });
  }
}
