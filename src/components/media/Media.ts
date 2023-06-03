import { actions } from "../../actions/actions";
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
    console.log(getState().subsPress);
    if (currentPage === 1) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }
    if (currentPage < currentLastPage) {
      nextButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }

    renderViewMode(currentViewMode);
  };

  function renderViewMode(currentViewMode: string) {
    if (currentViewMode === "grid") {
      list.style.display = "none";
      grid.style.display = "grid";
    } else {
      grid.style.display = "none";
      list.style.display = "flex";
    }
  }

  const setEvent = () => {
    prevButton.addEventListener("click", actions.goPrevPage);
    nextButton.addEventListener("click", actions.goNextPage);
    gridModeTab.addEventListener("click", actions.switchGridMode);
    listModeTab.addEventListener("click", actions.switchListMode);
  };

  return { setEvent, render };
};
