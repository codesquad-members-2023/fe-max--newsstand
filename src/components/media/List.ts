import { actions } from "../../actions/actions";
import { renderUnSubsAlert } from "../../app";
import { SNACK_TIMER } from "../../constants/constant";
import { State, getState } from "../../store/store";

export const List = (news: []) => {
  const listView = document.querySelector(".list-view") as HTMLElement;
  const media = document.querySelector(".media") as HTMLElement;
  const unSubsAlert = document.querySelector(".unsubs-alert") as HTMLElement;
  const totalPressData = news.map((article: News) => {
    return article.pressList.length;
  });
  actions.updateNews(totalPressData);

  let progInterval: NodeJS.Timeout | null = null;

  const render = () => {
    const state = getState();
    const { currentViewMode } = state;
    if (currentViewMode === "list") {
      listView.innerHTML = ListTemplate(state);
    }
  };

  const setEvent = () => {
    listView.addEventListener("click", (e) => handleClickListView(e));
    listView.addEventListener("mouseover", (e) => handleMouseOver(e));
    media.addEventListener("click", (e) => handleClickMedia(e));
  };

  function handleMouseOver(e: Event) {
    const target = e.target as HTMLElement;
    if (target.className === "unsubs-button") {
      const pressInfo = target.closest(".press-info");
      const pressImage = pressInfo!.querySelector(".press-info__image");
      const pressName = pressImage!.getAttribute("alt")!;

      renderUnSubsAlert(pressName);
    }
  }
  function handleClickMedia(e: Event) {
    const target = e.target as HTMLElement;
    if (target.className === "button no") {
      closeUnSubsAlert();
      return;
    }
    if (target.className === "button yes") {
      const unSubsAlert = target.closest(".unsubs-alert") as HTMLElement;

      const pressName = unSubsAlert.querySelector("span")!.textContent!;
      closeUnSubsAlert();

      stopInterval();

      actions.popSubs(pressName);
      localStorage.removeItem("pressName");
      startInterval();
    }
  }

  function closeUnSubsAlert() {
    unSubsAlert.style.display = "none";
  }

  function handleClickListView(e: Event) {
    const target = e.target as HTMLElement;

    if (target.closest(".article")) {
      handleClickArticle(target);
    }
    if (target.closest(".press-subs-button")) {
      handleClickSubs(target);
    }
  }

  function handleClickArticle(target: HTMLElement) {
    const { subsPress, currentPressMode } = getState();
    const isTotal = currentPressMode === "total";
    const articleData = isTotal
      ? news.map((article: News) => article.title)
      : getSubsNews(news, subsPress).map((article: News) => article.title);
    const clickArticle = target.closest(".article");
    const articleText = clickArticle!.querySelector(".text");
    const payloadIndex = articleData.findIndex((item: string) => item === articleText?.textContent);

    const targetArticle: News = isTotal ? news[payloadIndex]! : getSubsNews(news, subsPress)[payloadIndex];
    const payloadLast = targetArticle.pressList.length;
    const payloads = {
      index: payloadIndex,
      last: payloadLast,
    };

    stopInterval();
    actions.setArticleIndex(payloads);
    startInterval();
  }

  function handleClickSubs(target: HTMLElement) {
    const pressInfo = target.closest(".press-info");
    const pressImage = pressInfo!.querySelector(".press-info__image");
    const pressName = pressImage!.getAttribute("alt")!;
    const snack = document.querySelector(".snack") as HTMLElement;

    stopInterval();
    localStorage.setItem("pressName", JSON.stringify(pressName));
    actions.pushSubs(pressName);
    actions.switchListSubs();
    showSnack(snack);
    // }

    startInterval();
  }

  function showSnack(snack: HTMLElement) {
    snack.style.display = "block";
    setTimeout(() => {
      snack.style.display = "none";
    }, SNACK_TIMER);
  }

  function startInterval() {
    if (progInterval) return;

    progInterval = setInterval(() => {
      const { currentViewMode } = getState();
      if (currentViewMode === "list") {
        actions.listNextPage();
      }
    }, 20000);
  }

  function stopInterval() {
    if (progInterval) {
      clearInterval(progInterval);
      progInterval = null;
    }
  }

  function getSubsNews(news: [], subsPress: string[]): any {
    const pressList = [...new Set(news.flatMap((article: { pressList: any[] }) => article.pressList))];

    let subsNews = pressList
      .map((item) => {
        return {
          title: item.pressLogoAlt,
          pressList: [item],
        };
      })
      .filter((item) => subsPress.includes(item.title));

    return subsNews;
  }

  function ListTemplate(state: State) {
    const { currentPage, currentArticleIndex, subsPress, currentLastPage, currentPressMode } = state;
    const isTotal = currentPressMode === "total";
    const subsNews = getSubsNews(news, subsPress);
    const articleData = isTotal
      ? news.map((article: News) => article.title)
      : subsNews.map((article: News) => article.title);
    const articles = isTotal ? news : subsNews;
    const currentArticle: News = articles[currentArticleIndex]!;
    console.log(currentArticle);

    if (currentArticle) {
      const currentPress: Press = isTotal ? currentArticle.pressList[currentPage - 1]! : currentArticle.pressList[0]!;

      console.log(currentPage);

      return `
    <div class="list-view__field-tab">
      ${articles
        .map((article: News) => {
          const isProgress = article.title === articleData[currentArticleIndex];

          return `
          <div class="${isProgress ? "progress" : "article"}"${isTotal ? "" : ' draggable="true"'}>
            ${isProgress ? Fill() : ""}
            <div class="content-wrapper">
              <div class="text"${isTotal ? "" : ' draggable="true"'}>${article.title}</div>
              ${isTotal ? (isProgress ? PressNumber(currentPage, currentLastPage) : "") : PressArrow()}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
    <div class="press">
      <div class="press-info">
        <img class="press-info__image" src="${currentPress ? currentPress.pressLogoSrc : ""}" alt="${
        currentPress ? currentPress.pressLogoAlt : ""
      }"><img>
        <div class="press-info__edit-date">${currentPress ? currentPress.lastEditted : ""}</div>
        ${
          subsPress.includes(currentPress.pressLogoAlt) ? unSubs() : Subs()
          // `<button class="press-subs-button">
          //   <div class="plus-shape"></div>
          //   <div class="text">구독하기</div>
          // </button>`
        }
        </div>
        <div class="news">
          <div class="news-main">
            <img class="thumbnail" src="${currentPress ? currentPress.mainArticle.thumbnailSrc : ""}"></img>
            <div class="news-main__headline">${currentPress ? currentPress.mainArticle.mainArticleTitle : ""}</div>
          </div>
          <div class="news-sub">
            ${Title(currentPress)}
            <div class="news-sub__caption">${
              currentPress ? currentPress.pressLogoAlt : ""
            } 언론사에서 직접 편집한 뉴스입니다.</div>
          </div>
        </div>
      </div>
    </div>`;
    } else {
      return `<div class="list-view__field-tab">
    </div>
    `;
    }
  }

  function Subs() {
    return `
    <button class="press-subs-button">
      <div class="plus-shape"></div>
      <div class="text">구독하기</div>
    </button>`;
  }

  function unSubs() {
    return `<img src="/public/images/unsubs-button.svg" class="unsubs-button"/>`;
  }

  function PressArrow() {
    return `
    <img src="/public/images/press-arrow.svg" class="press-arrow"/>
    `;
  }

  function Title(currentPress: Press) {
    const titles = currentPress.subArticles;
    if (currentPress) {
      return `
    ${titles
      .map(
        (title) => `
    <div class="title">${title}</div>
    `
      )
      .join("")}
    `;
    } else return;
  }
  function PressNumber(currentPage: number, currentLastPage: number) {
    return `
    <div class="press-number">
      <div class="current">${currentPage}</div>/<div class="total">${currentLastPage}</div>
    </div>
    `;
  }
  function Fill() {
    return `
    <div class="fill"></div>
    `;
  }

  return { setEvent, render, stopInterval, startInterval };
};

type News = {
  title: string;
  pressList: any;
};

type Press = {
  pressLogoSrc: string;
  pressLogoAlt: string;
  lastEditted: string;
  mainArticle: mainArticle;
  subArticles: [];
};

type mainArticle = {
  thumbnailSrc: string;
  thumbnailAlt: string;
  mainArticleTitle: string;
};
