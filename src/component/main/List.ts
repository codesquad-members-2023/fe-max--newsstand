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
            return `<div class="main__list__fieldTab__textButton" data-components="textButton" addClick="handleChangePage">
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

    const scrollLeft =
      textButton[currentPage].offsetLeft -
      this.component["fieldTab"].offsetWidth / 2 +
      textButton[currentPage].offsetWidth / 2;
    this.component["fieldTab"].scroll({ left: scrollLeft });

    count.forEach((element) => {
      element.replaceChildren();
    });

    if (this.props.currentType === "all") {
      count[currentPage].textContent = `${currentIndex + 1}/${
        currentPressList.length
      }`;
    } else {
      const arrowImg = this.setTemplate('<img src="./src/assets/arrow.svg">');
      count[currentPage].appendChild(arrowImg);
    }
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
    return `<div class="main__list__pressNews" data-component="pressNews">
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
    const { newsImg, newsMainTitle, newsSub } = this.component;

    pressInfoImg.setAttribute("src", currentView.pressLogoSrc);
    pressInfoEditDate.textContent = currentView.lastEditted;
    pressInfoSubBtn.textContent = this.isSubscribe(currentView.pressLogoAlt)
      ? "해지하기"
      : "구독하기";

    newsImg.setAttribute("src", currentView.mainArticle.thumbnailSrc);
    newsSub.replaceChildren();

    newsMainTitle.textContent = currentView.mainArticle.mainArticleTitle;
    currentView.subArticles.forEach((data) => {
      const subTitle = this.setTemplate(
        `<div class="news__sub__title">${data}</div>`
      );

      newsSub.appendChild(subTitle);
    });
  }

  handleSubscribeBtnClick() {
    const subscribeList = this.getSubscribeList();
    const currentPress =
      this.props.list.currentViewList.pressList[
        this.props.list.currentViewIndex
      ].pressLogoAlt;

    if (subscribeList.includes(currentPress)) {
      const newSubscribedList = subscribeList.filter(
        (pressNameItem: string) => pressNameItem !== currentPress
      );

      localStorage.setItem("subscribe", JSON.stringify(newSubscribedList));
    } else {
      subscribeList.push(currentPress);

      localStorage.setItem("subscribe", JSON.stringify(subscribeList));
    }

    store.dispatch({
      type: "UPDATE_SUBSCRIBE",
      subscribedPress: this.getSubscribeList(),
    });

    this.setFieldTab();
    this.setPressNews();
  }

  getSubscribeList() {
    const subscribeList = localStorage.getItem("subscribe");

    if (subscribeList) {
      return JSON.parse(subscribeList);
    }

    localStorage.setItem("subscribe", JSON.stringify([]));

    return [];
  }

  handleNextIndex() {
    store.dispatch({ type: "INCREMENT_INDEX" });
  }

  handleChangePage(event: Event) {
    const target = event.currentTarget;
    if (target instanceof HTMLElement) {
      const textButtons = this.components["textButton"];
      const targetPage = textButtons.indexOf(target);

      store.dispatch({ type: "UPDATE_PAGE", page: targetPage });
    }
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
    const isChangedCurrentTypeList =
      props.list.currentTypeList.length !==
      this.props.list.currentTypeList.length;

    if (
      isChangedCurrentViewIndex ||
      isChangedCurrentPage ||
      isChangedCurrentType ||
      isChangedCurrentTypeList
    ) {
      this.props = props;

      if (isChangedCurrentType || isChangedCurrentTypeList) {
        this.component["fieldTab"].remove();
        delete this.components["textButton"];
        delete this.components["count"];
        delete this.components["fill"];

        const fieldTab = this.setTemplate(this.createFieldTab());

        this.node?.prepend(fieldTab);
        if (this.props.list.currentTypeList.length === 0) {
          this.component["pressNews"].remove();
        } else {
          this.node?.appendChild(this.component["pressNews"]);
          this.setFieldTab();
        }
      }

      this.setFieldTab();
      this.setPressNews();
      this.resetAnimation();
    }
  }
}

