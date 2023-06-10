import { actions } from "../../actions/actions";
import { stopInterval, startInterval } from "../../app";

import { State, getState } from "../../store/store";

export const Media = () => {
  const prevButton = document.querySelector(".prev-button") as HTMLElement;
  const nextButton = document.querySelector(".next-button") as HTMLElement;
  const gridModeTab = document.querySelector(".view-tab__grid") as HTMLElement;
  const listModeTab = document.querySelector(".view-tab__list") as HTMLElement;
  const grid = document.querySelector(".grid-view") as HTMLElement;
  const list = document.querySelector(".list-view") as HTMLElement;
  const totalPress = document.querySelector(".press-tab__total") as HTMLElement;
  const mySubsPress = document.querySelector(".press-tab__my-subs") as HTMLElement;
  const totalMedia = document.querySelector(".total-media");
  const unSubsAlert = document.querySelector(".unsubs-alert") as HTMLElement;

  const render = () => {
    const state = getState();
    const { currentPage, currentLastPage, currentViewMode, subsPress, currentPressMode } = state;
    // const isTotal = currentPressMode === "total";
    renderViewMode(state);
    console.log(subsPress.length === 0);

    if (currentPressMode === "subs" && subsPress.length === 0) {
      console.log("화살표없어야함");
      prevButton.style.display = "none";
      nextButton.style.display = "none";
      return;
    }
    if (currentViewMode === "grid") {
      prevButton.style.display = currentPage === 1 ? "none" : "block";
      nextButton.style.display = currentPage < currentLastPage ? "block" : "none";
      return;
    }
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  };

  function renderViewMode(state: State) {
    const { currentViewMode, currentPressMode } = state;
    const isGridMode = currentViewMode === "grid";
    const isTotalPressMode = currentPressMode === "total";

    totalPress.style.cssText = isTotalPressMode
      ? "line-height: 19.09px; font-weight: 700; color: #000;"
      : "line-height: 22px; font-weight: 500; color: #879298;";

    mySubsPress.style.cssText = isTotalPressMode
      ? "line-height: 22px; font-weight: 500; color: #879298;"
      : "line-height: 19.09; font-weight: 700; color: #000;";

    grid.style.display = isGridMode ? "grid" : "none";
    gridModeTab.querySelector("path")!.style.fill = isGridMode ? "#4362D0" : "#d2dae0";

    list.style.display = isGridMode ? "none" : "flex";
    listModeTab.querySelector("path")!.style.fill = isGridMode ? "#d2dae0" : "#4362D0";
  }

  const setEvent = () => {
    totalMedia?.addEventListener("click", (e) => handleClick(e));
  };
  function renderUnSubsAlert(pressName: string) {
    const { currentPressMode } = getState();

    if (currentPressMode === "total") return;

    unSubsAlert.innerHTML = `
    <div class="text-wrapper">
      <div class="text"><span>${pressName}</span>을(를)<br>
      구독해지하시겠습니까?</div>
    </div>
    <div class="buttons">
      <button class="button yes">예, 해지합니다</button>
      <button class="button no">아니오</button>
    </div>
    `;
    unSubsAlert.style.display = "flex";
  }
  function handleTotalPress() {
    const { currentViewMode } = getState();
    currentViewMode === "grid" ? gridTotalPress() : listTotalPress();
  }
  function gridTotalPress() {
    actions.switchGridTotal();
  }
  function listTotalPress() {
    actions.switchListTotal();
  }

  function handleMySubsPress() {
    const { currentViewMode } = getState();
    currentViewMode === "grid" ? gridSubsPress() : listSubsPress();
  }
  function gridSubsPress() {
    actions.switchGridSubs();
  }
  function listSubsPress() {
    actions.switchListSubs();
  }

  function handleClick(e: Event) {
    const target = e.target as HTMLElement;
    if (target.closest(".press-tab__total")) {
      handleTotalPress();
      return;
    }
    if (target.closest(".press-tab__my-subs")) {
      handleMySubsPress();
      return;
    }
    if (target.closest(".prev-button")) {
      handleClickPrev();
      return;
    }
    if (target.closest(".next-button")) {
      handleClickNext();
      return;
    }
    if (target.closest(".view-tab__grid")) {
      handleClickGridMode();
      return;
    }
    if (target.closest(".view-tab__list")) {
      handleClickListMode();
      return;
    }
  }

  function handleClickGridMode() {
    actions.switchGridMode();
    stopInterval();
  }

  function handleClickListMode() {
    actions.switchListMode();
    startInterval();
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

  return { setEvent, render, renderUnSubsAlert };
};
