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
export const List = (news: []) => {
  const { currentPage, currentLastPage, currentArticleIndex, currentViewMode } = getState();
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
    }, 1000);
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
    const { currentViewMode } = getState();
    if (currentViewMode === "list") {
      listView.innerHTML = FieldTab();
    }
  }

  function FieldTab() {
    const { currentPage, currentArticleIndex } = getState();

    return `
    <div class="list-view__field-tab">
      ${news
        .map((article: News) => {
          const isProgress = article.title === articleArray[currentArticleIndex];
          return `
          <div class="${isProgress ? "progress" : "article"}">
            ${isProgress ? Fill() : ""}
            <div class="text">${article.title}</div>
            ${isProgress ? PressNumber(currentPage) : ""}
          </div>
        `;
        })
        .join("")}
    </div>
              `;
  }
  function PressNumber(currentPage: number) {
    return `
    <div class="pressNumber">${currentPage}/${pressLastIndex}</div>
    `;
  }
  function Fill() {
    return `
    <div class="fill"></div>
    `;
  }

  return { renderFieldTab, setArt, loadNextPress, stopInterval, startInterval };
};
