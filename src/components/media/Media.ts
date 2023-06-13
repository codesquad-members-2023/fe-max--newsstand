import { actions } from "../../actions/actions";
import { ARTICLE_MOVE_TIME, SCROLL_AMOUNT } from "../../constants/constant";
import { getState, subscribe } from "../../store/store";
import { Arrow, renderArrow } from "./Arrow";
import { Grid } from "./Grid";
import { List } from "./List";
import { Press, renderPressTab } from "./Press";
import { ViewTab, renderViewTab } from "./ViewTab";
import { UnSubsAlert, closeUnSubsAlert, renderUnSubsAlert } from "./unSubsAlert";

export const Media = (pressData: any) => {
  let progInterval: NodeJS.Timeout | null = null;
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const media = document.querySelector(".media") as HTMLElement;
  const grid = Grid(pressData.randomImageData);
  const list = List(pressData.totalPressData);

  const render = () => {
    const { currentViewMode } = getState();
    const isGridMode = currentViewMode === "grid";
    media!.innerHTML = `
    <div class="total-media">
      <div class="total-media__tab-bar">
        ${Press()}
        ${ViewTab()}
      </div>
      ${Arrow()}
      <div class="media-view">
        ${isGridMode ? grid.template() : list.template()}
      </div>
      <div class="snack">내가 구독한 언론사에 추가되었습니다.</div>
      ${UnSubsAlert()}
    </div>
    `;
  };

  render();

  const mediaView = document.querySelector(".media-view") as HTMLElement;
  const totalPress = document.querySelector(".press-tab__total") as HTMLElement;
  const mySubsPress = document.querySelector(".press-tab__my-subs") as HTMLElement;
  const gridModeTab = document.querySelector(".view-tab__grid") as HTMLElement;
  const listModeTab = document.querySelector(".view-tab__list") as HTMLElement;
  const prevButton = document.querySelector(".prev-button") as HTMLElement;
  const nextButton = document.querySelector(".next-button") as HTMLElement;

  renderPressTab(totalPress, mySubsPress);
  renderViewTab(gridModeTab, listModeTab);
  renderArrow(prevButton, nextButton);
  renderMediaView();

  subscribe(() => renderPressTab(totalPress, mySubsPress));
  subscribe(() => renderViewTab(gridModeTab, listModeTab));
  subscribe(() => renderArrow(prevButton, nextButton));
  subscribe(renderMediaView);

  const setEvent = () => {
    media.addEventListener("click", (e) => handleMediaClick(e));
    media.addEventListener("mouseover", (e) => handleMediaOver(e));
    mediaView.addEventListener("mouseout", (e) => handleMouseOut(e));
    media.addEventListener("mousedown", (e) => handleMouseDown(e));
    media.addEventListener("mousemove", (e) => handleMouseMove(e));
    media.addEventListener("mouseup", (e) => handleMouseUp(e));
    mediaView.addEventListener("mouseleave", handleMediaLeave);
  };

  setEvent();
  startInterval();

  function renderMediaView() {
    const { currentViewMode } = getState();
    const isGridMode = currentViewMode === "grid";

    isGridMode ? grid.render() : list.render();
  }

  function startInterval() {
    if (progInterval) return;
    progInterval = setInterval(() => {
      const { currentViewMode } = getState();
      if (currentViewMode === "list") {
        actions.goNextPage();
      }
    }, ARTICLE_MOVE_TIME);
  }

  function stopInterval() {
    if (progInterval) {
      clearInterval(progInterval);
      progInterval = null;
    }
  }

  function handleMediaClick(e: Event) {
    const target = e.target as HTMLElement;
    if (target.className === "prev-button") {
      stopInterval();
      actions.goPrevPage();
      startInterval();
      return;
    }
    if (target.className === "next-button") {
      stopInterval();
      actions.goNextPage();
      startInterval();
      return;
    }
    if (target.closest(".grid-overlay__button")) {
      grid.toggleSubs(target);
      return;
    }

    if (target.closest(".view-tab__grid")) {
      actions.switchGridMode();
      return;
    }
    if (target.closest(".view-tab__list")) {
      actions.switchListMode();
      return;
    }
    if (target.className === "press-tab__total") {
      actions.switchTotalMode();
      return;
    }
    if (target.className === "press-tab__my-subs") {
      actions.switchSubsMode();
      return;
    }
    if (target.closest(".article")) {
      stopInterval();
      list.handleClickArticle(target);
      startInterval();
      return;
    }
    if (target.closest(".press-subs-button")) {
      stopInterval();
      list.handleClickSubs(target);
      startInterval();
      return;
    }
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
      return;
    }
  }

  function handleMediaOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;

    if (target.className === "grid-item" && relatedTarget) {
      const currentTarget = relatedTarget.closest(".grid-item");
      if (target.closest(".grid-item") === currentTarget) {
        return;
      }
      grid.renderGirdSubsOverlay(target);
    }
    if (target.className === "unsubs-button") {
      const { currentViewMode, currentPressMode } = getState();
      const isGridMode = currentViewMode === "grid";
      if (currentViewMode === "grid" && currentPressMode === "total") return;
      const pressName = isGridMode ? grid.unSubsPress(target) : list.unSubsPress(target);

      renderUnSubsAlert(pressName);
    }
  }

  function handleMouseOut(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;

    if (target.closest(".list-view__field-tab")) {
      const currentTarget = relatedTarget.closest(".list-view__field-tab");
      if (target.closest(".list-view__field-tab") === currentTarget) {
        return;
      }
      isDown = false;
      target.classList.remove("active");
    }
  }

  function handleMouseDown(e: MouseEvent) {
    const target = e.target as HTMLElement;

    if (target.closest(".list-view__field-tab")) {
      const slider = target.closest(".list-view__field-tab") as HTMLElement;
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }
  }

  function handleMouseMove(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest(".list-view__field-tab")) {
      if (!isDown) return;
      const slider = target.closest(".list-view__field-tab") as HTMLElement;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * SCROLL_AMOUNT;

      slider.scrollLeft = scrollLeft - walk;
    }
  }

  function handleMouseUp(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest(".list-view__field-tab")) {
      const slider = target.closest(".list-view__field-tab") as HTMLElement;
      isDown = false;
      slider.classList.remove("active");
    }
  }

  function handleMediaLeave() {
    const { currentViewMode } = getState();
    const isGrid = currentViewMode === "grid";
    if (isGrid) grid.resetGridSubsOverlay();
  }
};
