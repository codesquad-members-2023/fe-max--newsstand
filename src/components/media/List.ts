import { actions } from "../../actions/actions";
import { getState } from "../../store/store";

type Article = {
  title: string;
  pressList: [];
};

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
  const { currentArticleIndex, currentViewMode } = getState();
  let intervalID: NodeJS.Timeout | null = null;
  let currentArticle: Article = news[currentArticleIndex]!;
  let pressLastIndex = currentArticle.pressList.length;

  if (currentViewMode === "list") {
    actions.setListLastPage(pressLastIndex);
    setArt();
    renderFieldTab();
  }
  function setArt() {
    const { currentArticleIndex } = getState();
    currentArticle = news[currentArticleIndex]!;
    pressLastIndex = currentArticle.pressList.length;
    // pressLastIndex = 3;

    renderFieldTab();
  }
  const articleArray = news.map((article: News) => article.title);

  const listView = document.querySelector(".list-view") as HTMLElement;

  // setInterval(() => {
  //   loadNextPress();
  // }, 1000);
  startInterval();

  function startInterval() {
    if (intervalID) {
      return;
    }

    intervalID = setInterval(() => {
      const { currentViewMode } = getState();
      if (currentViewMode === "list") {
        actions.autoNextPage();
        loadNextPress();
      }
    }, 5000);
  }

  function stopInterval() {
    if (intervalID) {
      clearInterval(intervalID);
      intervalID = null;
    }
  }
  function loadNextPress() {
    const { currentPage, currentLastPage, currentArticleIndex } = getState();
    console.log(currentArticleIndex);
    if (currentArticleIndex === 6 && currentPage > currentLastPage) {
      getState().currentArticleIndex = 0;
      getState().currentPage = 1;
      // actions.resetArticleIndex;

      setArt();
      actions.setListLastPage(pressLastIndex);
      renderFieldTab();
      return;
    }
    if (currentArticleIndex === 0 && currentPage < 1) {
      getState().currentArticleIndex = 6;
      getState().currentPage = 1;
      // actions.resetArticleIndex;

      setArt();
      actions.setListLastPage(pressLastIndex);
      renderFieldTab();
      return;
    }
    if (currentPage > currentLastPage) {
      getState().currentArticleIndex = getState().currentArticleIndex + 1;
      getState().currentPage = 1;
      setArt();

      actions.setListLastPage(pressLastIndex);
    }
    if (currentPage < 1) {
      getState().currentArticleIndex = getState().currentArticleIndex - 1;
      getState().currentPage = 1;
      setArt();
    }
    actions.setListLastPage(pressLastIndex);
    renderFieldTab();
  }

  function renderFieldTab() {
    const { currentViewMode, subsPress } = getState();
    console.log(subsPress);
    if (currentViewMode === "list") {
      listView.innerHTML = FieldTab();
    }
  }

  function FieldTab() {
    const { currentPage, currentArticleIndex, subsPress } = getState();
    console.log(currentArticle);
    const currentPress: Press = currentArticle.pressList[currentPage - 1]!;

    console.log(currentPress);
    return `
    <div class="list-view__field-tab">
      ${news
        .map((article: News) => {
          const isProgress = article.title === articleArray[currentArticleIndex];
          return `
          <div class="${isProgress ? "progress" : "article"}">
            ${isProgress ? Fill() : ""}
            <div class="content-wrapper">
              <div class="text">${article.title}</div>
              ${isProgress ? PressNumber(currentPage) : ""}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
    <div class="press">
      <div class="press-info">
        <img class="press-info__image" src="${currentPress.pressLogoSrc}"><img>
        <div class="press-info__edit-date">${currentPress.lastEditted}</div>
        <button class="press-subs-button">
          <div class="plus-shape"></div>
          <div class="text">${subsPress.includes(currentPress.pressLogoAlt)? "해지하기" : "구독하기"}</div>
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
    console.log(currentPress.subArticles);
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
  function PressNumber(currentPage: number) {
    return `
    <div class="press-number">
      <div class="current">${currentPage}</div>/<div class="total">${pressLastIndex}</div>
    </div>
    `;
  }
  function Fill() {
    return `
    <div class="fill"></div>
    `;
  }

  return { renderFieldTab, setArt, loadNextPress, stopInterval, startInterval };
};
