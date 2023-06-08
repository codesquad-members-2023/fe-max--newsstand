import { actions } from "../../actions/actions";
import { SNACK_TIMER } from "../../constants/constant";
import { State, getState } from "../../store/store";

type News = {
  title: string;
  pressList: [];
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

export const List = (news: []) => {
  const listView = document.querySelector(".list-view") as HTMLElement;
  const totalPressData = news.map((article: News) => {
    return article.pressList.length;
  });
  actions.updateNews(totalPressData);
  const articleData = news.map((article: News) => article.title);
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
  };

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
    const clickArticle = target.closest(".article");
    const articleText = clickArticle!.querySelector(".text");
    const payloadIndex = articleData.findIndex((item: string) => item === articleText?.textContent);

    const targetArticle: News = news[payloadIndex]!;
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
    const { subsPress } = getState();
    const pressInfo = target.closest(".press-info");
    const pressImage = pressInfo?.querySelector(".press-info__image");
    const pressName = pressImage!.getAttribute("alt")!;
    const snack = document.querySelector(".snack") as HTMLElement;

    stopInterval();
    if (subsPress.includes(pressName)) {
      actions.popSubs(pressName);
    } else {
      actions.pushSubs(pressName);
      showSnack(snack);
    }
    startInterval();
  }
  function showSnack(snack: HTMLElement) {
    snack.style.display = "block";
    setTimeout(() => {
      snack.style.display = "none";
    }, SNACK_TIMER);
  }

  function startInterval() {
    if (progInterval) {
      return;
    }
    progInterval = setInterval(() => {
      const { currentViewMode } = getState();
      if (currentViewMode === "list") {
        // actions.autoNextPage();
        actions.listNextPage();
      }
    }, 1000);
  }
  function stopInterval() {
    if (progInterval) {
      clearInterval(progInterval);
      progInterval = null;
    }
  }

  function ListTemplate(state: State) {
    const { currentPage, currentArticleIndex, subsPress, currentLastPage } = state;
    const currentArticle: News = news[currentArticleIndex]!;
    const currentPress: Press = currentArticle.pressList[currentPage - 1]!;

    return `
    <div class="list-view__field-tab">
      ${news
        .map((article: News) => {
          const isProgress = article.title === articleData[currentArticleIndex];
          return `
          <div class="${isProgress ? "progress" : "article"}">
            ${isProgress ? Fill() : ""}
            <div class="content-wrapper">
              <div class="text">${article.title}</div>
              ${isProgress ? PressNumber(currentPage, currentLastPage) : ""}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
    <div class="press">
      <div class="press-info">
        <img class="press-info__image" src="${currentPress.pressLogoSrc}" alt="${currentPress.pressLogoAlt}"><img>
        <div class="press-info__edit-date">${currentPress.lastEditted}</div>
        <button class="press-subs-button">
          <div class="plus-shape"></div>
          <div class="text">${subsPress.includes(currentPress.pressLogoAlt) ? "해지하기" : "구독하기"}</div>
        </div>
        <div class="news">
          <div class="news-main">
            <img class="thumbnail" src="${currentPress.mainArticle.thumbnailSrc}"></img>
            <div class="news-main__headline">${currentPress.mainArticle.mainArticleTitle}</div>
          </div>
          <div class="news-sub">
            ${Title(currentPress)}
            <div class="news-sub__caption">${currentPress.pressLogoAlt} 언론사에서 직접 편집한 뉴스입니다.</div>
          </div>
        </div>
      </div>
    </div>
              `;
  }

  function Title(currentPress: Press) {
    const titles = currentPress.subArticles;
    return `
    ${titles
      .map(
        (title) => `
    <div class="title">${title}</div>
    `
      )
      .join("")}
    `;
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
