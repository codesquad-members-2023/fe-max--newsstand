import { ListDataType } from "../../utils/types";
import { Base } from "../Base";
type ListProps = {
  currentPage: number;
  currentType: "all" | "sub";
  list: {
    listAllList: ListDataType[];
    currentViewIndex: number;
    currentTypeList: ListDataType;
    currentViewList: ListDataType;
  };
};

export class List extends Base {
  constructor(private props: ListProps) {
    console.log(props);
    super();
    this.render(`
        <div class="main__list">
          ${this.createFieldTab()}
          ${this.createPressNews()}
        </div>
    `);

    this.setPressNews();
  }
  createFieldTab() {
    const list = this.props.list;
    const allList = list.listAllList;
    const fieldTab = `
      <div class="main__list__fieldTab">
        ${allList
          .map((data, index) => {
            const title = `<span>${data.title}</span>`;
            const count =
              list.currentViewIndex === index
                ? `<span class="count">
                    ${index + 1}/${data.pressList.length}
                  </span>`
                : "";

            return `<div class="main__list__fieldTab__textButton ${
              list.currentViewIndex === index ? "currentTextButton" : ""
            }">
               ${title}
               ${count}
              </div>`;
          })
          .join("")}
      </div>
    `;

    return fieldTab;
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
    currentView.subArticles.forEach((data) => {
      const subTitle = this.setTemplate(
        `<div class="news__sub__title">${data}</div>`
      );
      newsSub.appendChild(subTitle);
    });
  }

  // createPressNews() {
  //   const currentViewList = this.props.list.currentViewList;
  //   const currentIndex = this.props.list.currentViewIndex;
  //   const currentView = currentViewList.pressList[currentIndex];

  //   const pressNews = `<div class="main__list__pressNews">
  //     <img src="${currentView.pressLogoSrc}"><span>${
  //     currentViewList.pressList[currentIndex].lastEditted
  //   }${this.isSubscribe("")}</span>
  //   </div>`;
  //   return pressNews;
  // }

  isSubscribe(pressName: string) {
    const subscribedPress = JSON.parse(localStorage.getItem("subscribe")!);
    return subscribedPress.includes(pressName);
  }

  update(props: ListProps) {
    console.log(props);
  }
}

