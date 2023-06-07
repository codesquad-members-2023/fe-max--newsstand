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
  const listView = document.querySelector(".list-view") as HTMLElement;
  const articleArray = news.map((article: News) => article.title);
  let intervalID: NodeJS.Timeout | null = null;
  let currentArticle: Article = news[currentArticleIndex]!;
  let pressLastIndex = currentArticle.pressList.length;

  if (currentViewMode === "list") {
    actions.setListLastPage(pressLastIndex);
    setArt();
    render();
  }

  const setEvent = () => {
    listView.addEventListener("click", (e) => handleClickListView(e));
  };

  function handleClickListView(e: Event) {
    const target = e.target as HTMLElement;
    const { subsPress } = getState();
    if (target.closest(".article")) {
      const clickArticle = target.closest(".article");
      const articleText = clickArticle?.querySelector(".text");
      const index = articleArray.findIndex((item: string) => item === articleText?.textContent);
      actions.setArticleIndex(index);
      setArt();
      loadNextPress();
    }

    if (target.closest(".press-subs-button")) {
      const pressInfo = target.closest(".press-info");
      const pressImage = pressInfo?.querySelector(".press-info__image");
      const pressName = pressImage!.getAttribute("alt")!;
      const snack = document.querySelector(".snack") as HTMLElement;

      if (subsPress.includes(pressName)) {
        actions.popSubs(pressName);
      } else {
        actions.pushSubs(pressName);
        console.log(snack);
        showSnack(snack);
      }

      loadNextPress();
    }
  }

  function showSnack(snack: HTMLElement) {
    snack.style.display = "block";
    setTimeout(() => {
      snack.style.display = "none";
    }, 5000);
  }

  function setArt() {
    const { currentArticleIndex } = getState();
    currentArticle = news[currentArticleIndex]!;
    pressLastIndex = currentArticle.pressList.length;
    // pressLastIndex = 3;

    render();
  }

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
    }, 20000);
  }

  function stopInterval() {
    if (intervalID) {
      clearInterval(intervalID);
      intervalID = null;
    }
  }
  function loadNextPress() {
    const { currentPage, currentLastPage, currentArticleIndex } = getState();

    if (currentArticleIndex === 6 && currentPage > currentLastPage) {
      getState().currentArticleIndex = 0;
      getState().currentPage = 1;
      // actions.resetArticleIndex;

      setArt();
      actions.setListLastPage(pressLastIndex);
      render();
      // return;
    }
    if (currentArticleIndex === 0 && currentPage < 1) {
      getState().currentArticleIndex = 6;
      getState().currentPage = 1;
      // actions.resetArticleIndex;

      setArt();
      actions.setListLastPage(pressLastIndex);
      render();
      // return;
    }
    if (currentPage > currentLastPage) {
      getState().currentArticleIndex = getState().currentArticleIndex + 1;
      getState().currentPage = 1;
      setArt();

      actions.setListLastPage(pressLastIndex);
    }
    if (currentPage < 1) {
      getState().currentArticleIndex = getState().currentArticleIndex - 1;
      const prevArticle: News = news[currentArticleIndex - 1]!;
      console.log(prevArticle);
      getState().currentPage = prevArticle.pressList.length;
      setArt();
      console.log(currentArticle.pressList.length);
    }
    actions.setListLastPage(pressLastIndex);
    render();
  }

  function render() {
    const { currentViewMode } = getState();

    if (currentViewMode === "list") {
      listView.innerHTML = ListTemplate();
    }
  }

  function ListTemplate() {
    const { currentPage, currentArticleIndex, subsPress } = getState();

    const currentPress: Press = currentArticle.pressList[currentPage - 1]!;

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

  return { setEvent, render, setArt, loadNextPress, stopInterval, startInterval };
};
