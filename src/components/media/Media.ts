import { actions } from "../../actions/actions";
import { stopInterval, startInterval } from "../../app";
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
    nextButton.addEventListener("click", handleClickNext);
    gridModeTab.addEventListener("click", handleClickGridMode);
    listModeTab.addEventListener("click", handleClickListMode);
  };

  function handleClickGridMode() {
    actions.switchGridMode();
  }

  function handleClickListMode() {
    actions.switchListMode();
    // setArticle();
  }

  function handleClickPrev() {
    const { currentViewMode } = getState();
    currentViewMode === "grid" ? clickPrevGrid() : clickPrevList();
  }
  function clickPrevGrid() {
    actions.gridPrevPage();
  }
  function clickPrevList() {
    stopInterval();
    actions.listPrevPage();
    startInterval();
  }

  function handleClickNext() {
    const { currentViewMode } = getState();
    currentViewMode === "grid" ? clickNextGrid() : clickNextList();
  }
  function clickNextGrid() {
    actions.gridNextPage();
  }

  function clickNextList() {
    stopInterval();
    actions.listNextPage();
    startInterval();
  }

  return { setEvent, render };
};
