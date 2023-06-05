import { actions } from "../../actions/actions";
import { loadNextPress, stopInterval, startInterval, setArt } from "../../app";
import { getState } from "../../store/store";

export const Media = () => {
  const prevButton = document.querySelector(".prev-button") as HTMLElement;
  const nextButton = document.querySelector(".next-button") as HTMLElement;
  const gridModeTab = document.querySelector(".view-tab__grid") as HTMLElement;
  const listModeTab = document.querySelector(".view-tab__list") as HTMLElement;
  const grid = document.querySelector(".grid-view") as HTMLElement;
  const list = document.querySelector(".list-view") as HTMLElement;

  const render = () => {
    const { currentPage, currentLastPage, currentViewMode } = getState();

    renderViewMode(currentViewMode);

    if (currentViewMode === "grid") {
      prevButton.style.display = currentPage === 1 ? "none" : "block";
      nextButton.style.display = currentPage < currentLastPage ? "block" : "none";
      return;
    }
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  };

  function renderViewMode(currentViewMode: string) {
    const isGridMode = currentViewMode === "grid";

    grid.style.display = isGridMode ? "grid" : "none";
    gridModeTab.querySelector("path")!.style.fill = isGridMode ? "#4362D0" : "#d2dae0";

    list.style.display = isGridMode ? "none" : "flex";
    listModeTab.querySelector("path")!.style.fill = isGridMode ? "#d2dae0" : "#4362D0";
  }

  const setEvent = () => {
    prevButton.addEventListener("click", handleClickPrev);
    // prevButton.addEventListener("click", actions.goPrevPage);
    nextButton.addEventListener("click", handleClickNext);
    // nextButton.addEventListener("click", actions.goNextPage);
    gridModeTab.addEventListener("click", () => {
      actions.switchGridMode();
    });
    listModeTab.addEventListener("click", () => {
      actions.switchListMode();
      setArt();
    });
  };

  function handleClickPrev() {
    const { currentViewMode } = getState();
    actions.goPrevPage();
    currentViewMode === "grid" ? clickPrevGrid() : clickPrevList();
  }
  function clickPrevGrid() {
    console.log("비어있어서 그리드인거 알려줌");
  }
  function clickPrevList() {
    loadNextPress();
  }

  function handleClickNext() {
    stopInterval();
    const { currentViewMode } = getState();
    actions.goNextPage();
    currentViewMode === "grid" ? clickNextGrid() : clickNextList();
    startInterval();
  }
  function clickNextGrid() {
    console.log("비어있어서 그리드인거 알려줌");
  }

  function clickNextList() {
    loadNextPress();
    // renderFieldTab();
  }

  return { setEvent, render };
};
