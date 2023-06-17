import Component from "@components/common/Component.ts";
import { observeStates, unobserveStates, dispatch } from "@store/index.ts";
import {
  TListViewDataItem,
  TPressListItem,
  TListViewProps,
} from "@customTypes/index.ts";

class ListView extends Component {
  private articleDuration: number = 20000;
  private animationFrameId?: number;

  private leftBtn: HTMLButtonElement;
  private rightBtn: HTMLButtonElement;
  private listContainer: HTMLElement;

  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "list-view-container";

    const leftBtn = document.createElement("button");
    leftBtn.className = "left-btn";
    leftBtn.type = "button";
    const rightBtn = document.createElement("button");
    rightBtn.className = "right-btn";
    rightBtn.type = "button";

    const listContainer = document.createElement("div");
    listContainer.className = "list-container";

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/MainNews/ListView.scss"
    );

    topElement.append(leftBtn, rightBtn, listContainer, stylesheetLink);

    super(topElement);
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.listContainer = listContainer;

    observeStates(
      this,
      "listViewData",
      "listViewCurrCategoryIdx",
      "listViewCurrArticleIdx"
    );
    dispatch({ type: "listViewData" });
  }

  setProps({
    listViewData,
    listViewCurrCategoryIdx,
    listViewCurrArticleIdx,
  }: TListViewProps) {
    this.listContainer.innerHTML = "";
    this.listContainer.appendChild(
      this.renderCategoriesBar(
        listViewData,
        listViewCurrCategoryIdx,
        listViewCurrArticleIdx
      )
    );
    this.listContainer.appendChild(
      this.renderMainDisplay(
        listViewData[listViewCurrCategoryIdx].pressList[listViewCurrArticleIdx]
      )
    );
  }

  renderCategoriesBar(
    listViewData: TListViewDataItem[],
    listViewCurrCategoryIdx: number,
    listViewCurrArticleIdx: number
  ) {
    const categoriesBar = document.createElement("div");
    categoriesBar.className = "categories-bar";

    listViewData.forEach((category, idx) => {
      const categoryBox = document.createElement("a");
      categoryBox.className = "category-box";
      const categoryTitle = document.createElement("span");
      categoryTitle.textContent = category.categoryName;
      categoryBox.appendChild(categoryTitle);

      if (idx === listViewCurrCategoryIdx) {
        categoryBox.classList.add("is-active");
        const progressSpan = document.createElement("span");
        progressSpan.textContent = `${listViewCurrArticleIdx + 1} / ${
          category.pressList.length
        }`;
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";

        this.animationFrameId = requestAnimationFrame(
          this.animationStep(progressBar)
        );

        categoryBox.append(progressSpan, progressBar);
      }

      categoryBox.addEventListener("click", () => {
        dispatch({ type: "listViewCurrCategoryIdx", content: idx });
      });

      categoriesBar.appendChild(categoryBox);
    });

    return categoriesBar;
  }

  animationStep(progressBar: HTMLElement) {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      const progress = Math.min(
        (elapsedTime / this.articleDuration) * 100,
        100
      );
      progressBar.style.width = `${progress}%`;

      if (progress < 100) {
        requestAnimationFrame(step);
      } else {
        dispatch({
          type: "listViewCurrArticleIdx",
          content: "increment",
        });
      }
    };

    return step;
  }

  renderMainDisplay(pressListItem: TPressListItem) {
    const {
      pressLogoSrc,
      pressLogoAlt,
      lastEditted,
      mainArticle: { thumbnailSrc, thumbnailAlt, mainArticleTitle },
      subArticles,
    } = pressListItem;

    const mainDisplay = document.createElement("div");
    mainDisplay.className = "main-display";

    const header = document.createElement("header");
    const pressLogoImg = document.createElement("img");
    pressLogoImg.className = "press-logo";
    pressLogoImg.src = pressLogoSrc;
    pressLogoImg.alt = pressLogoAlt;
    const lastEdittedSpan = document.createElement("span");
    lastEdittedSpan.className = "last-editted";
    lastEdittedSpan.textContent = lastEditted;
    header.append(pressLogoImg, lastEdittedSpan);

    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";

    const mainArticleContainer = document.createElement("div");
    mainArticleContainer.className = "main-article-container";
    const mainArticleImg = document.createElement("img");
    mainArticleImg.src = thumbnailSrc;
    mainArticleImg.alt = thumbnailAlt;
    const mainArticleTitleEl = document.createElement("a");
    mainArticleTitleEl.className = "main-article-title";
    mainArticleTitleEl.textContent = mainArticleTitle;
    mainArticleContainer.append(mainArticleImg, mainArticleTitleEl);

    const subArticlesContainer = document.createElement("div");
    subArticlesContainer.className = "subarticles-container";
    subArticles.forEach((subArticle) => {
      const a = document.createElement("a");
      a.textContent = subArticle;
      subArticlesContainer.appendChild(a);
    });
    const postscript = document.createElement("span");
    postscript.textContent = `${pressLogoAlt} 언론사에서 직접 편집한 뉴스입니다.`;
    subArticlesContainer.appendChild(postscript);

    mainContainer.append(mainArticleContainer, subArticlesContainer);

    mainDisplay.append(header, mainContainer);

    return mainDisplay;
  }

  connectedCallback() {
    this.leftBtn.addEventListener("click", () => {
      dispatch({ type: "listViewCurrArticleIdx", content: "decrement" });
    });
    this.rightBtn.addEventListener("click", () => {
      dispatch({ type: "listViewCurrArticleIdx", content: "increment" });
    });
  }

  disconnectedCallback() {
    unobserveStates(this, "listViewData", "listViewCurrArticleIdx");

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

customElements.define("list-view", ListView);
