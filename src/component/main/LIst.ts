import { store } from "../../Store";
import { ListDataType } from "../../utils/types";
import { Base } from "../Base";
type ListProps = {
  currentPage: number;
  currentType: "all" | "sub";
  list: {
    listAllList: ListDataType[];
    currentViewIndex: number;
    currentTypeList: ListDataType[];
    currentViewList: ListDataType;
  };
};

export class List extends Base {
  constructor(private props: ListProps) {
    super();
    this.render(`
        <div class="main__list">
            ${this.createFieldTab()}

          ${this.createPressNews()}
        </div>
    `);

    this.setFieldTab();
    this.setPressNews();
  }

  createFieldTab() {
    const list = this.props.list.currentTypeList;
    const fieldTab = `
      <div class="main__list__fieldTab" data-component="fieldTab">
        ${list
          .map((data) => {
            return `<div class="main__list__fieldTab__textButton" data-components="textButton">
                <div class="wrapper">
                  <span>${data.title}</span>
                  <span class="count" data-components="count"></span>
                </div>
                <div class="fill" data-components="fill" addAnimationend="handleNextIndex"></div>
              </div>`;
          })
          .join("")}
          </div>
    `;

    return fieldTab;
  }

  setFieldTab() {
    const { textButton, count } = this.components;
    const currentPage = this.props.currentPage;
    const currentIndex = this.props.list.currentViewIndex;
    const list = this.props.list;
    const currentPressList = list.currentViewList.pressList;

    textButton.forEach((element) => {
      element.classList.remove("currentTextButton");
    });
    textButton[currentPage].classList.add("currentTextButton");
    count.forEach((element) => {
      element.replaceChildren();
    });
    count[currentPage].textContent = `${currentIndex + 1}/${
      currentPressList.length
    }`;
  }

  resetAnimation() {
    const fill = this.components["fill"];
    const currentPage = this.props.currentPage;
    const currentFill = fill[currentPage];

    currentFill.style.width = "0%";
    currentFill.style.animation = "none";
    setTimeout(function () {
      currentFill.style.animation = "";
    }, 0);
  }

  createPressNews() {
    return `<div class="main__list__pressNews">
      <div class="main__list__pressNews__pressInfo">
        <img data-component="pressInfoImg">
        <span class="pressInfo__editDate" data-component="pressInfoEditDate"></span>
        <button class="main__grid__item__layer-btn" addClick="handleSubscribeBtnClick">
            <img src="./src/assets/plus.svg">
            <span data-component="pressInfoSubBtn"></span>
          </button>
      </div>
      <div class="main__list__pressNews__news">
        <div class="news__main">
          <img data-component="newsImg">
          <div class="news__main__title" data-component="newsMainTitle"></div>
        </div>
        <div class="news__sub" data-component="newsSub">

        </div>
      </div>
    </div>`;
  }

  setPressNews() {
    const list = this.props.list;
    const currentViewPressList = list.currentViewList.pressList;
    const currentViewIndex = list.currentViewIndex;
    const currentView = currentViewPressList[currentViewIndex];

    const { pressInfoImg, pressInfoEditDate, pressInfoSubBtn } = this.component;
    pressInfoImg.setAttribute("src", currentView.pressLogoSrc);
    pressInfoEditDate.textContent = currentView.lastEditted;
    pressInfoSubBtn.textContent = this.isSubscribe(currentView.pressLogoAlt)
      ? "해지하기"
      : "구독하기";

    const { newsImg, newsMainTitle, newsSub } = this.component;
    newsImg.setAttribute("src", currentView.mainArticle.thumbnailSrc);
    newsMainTitle.textContent = currentView.mainArticle.mainArticleTitle;
    newsSub.replaceChildren();
    currentView.subArticles.forEach((data) => {
      const subTitle = this.setTemplate(
        `<div class="news__sub__title">${data}</div>`
      );
      newsSub.appendChild(subTitle);
    });
  }

  handleNextIndex() {
    store.dispatch({ type: "INCREMENT_INDEX" });
  }

  isSubscribe(pressName: string) {
    const subscribedPress = JSON.parse(localStorage.getItem("subscribe")!);
    return subscribedPress.includes(pressName);
  }

  update(props: ListProps) {
    const isChangedCurrentPage = this.props.currentPage !== props.currentPage;
    const isChangedCurrentViewIndex =
      props.list.currentViewIndex !== this.props.list.currentViewIndex;
    const isChangedCurrentType = props.currentType !== this.props.currentType;

    if (
      isChangedCurrentViewIndex ||
      isChangedCurrentPage ||
      isChangedCurrentType
    ) {
      this.props = props;

      if (isChangedCurrentType) {
        this.component["fieldTab"].remove();
        delete this.components["textButton"];
        delete this.components["count"];
        delete this.components["fill"];

        const fieldTab = this.setTemplate(this.createFieldTab());

        this.node?.prepend(fieldTab);
        this.setFieldTab();
      }

      this.setFieldTab();
      this.setPressNews();
      this.resetAnimation();
    }
  }
}

