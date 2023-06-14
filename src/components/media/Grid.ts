import { actions } from "../../actions/actions";
import { ITEM_PER_GRID } from "../../constants/constant";
import { Images } from "../../main";
import { getState } from "../../store/store";

export const Grid = (totalImages: Images) => {
  let currentOverlay: HTMLElement | null = null;

  const render = () => {
    const { gridStartPoint, currentViewMode, currentPressMode, subsPress } = getState();
    const isTotal = currentPressMode === "total";

    const subsImages = totalImages.filter((image) => subsPress.includes(image.alt));
    const pressImage = isTotal ? totalImages : subsImages;

    if (currentViewMode === "grid") {
      const mediaView = document.querySelector(".media-view") as HTMLElement;
      mediaView!.innerHTML = `
      <div class="grid-view">
        ${Array.from({ length: ITEM_PER_GRID }, (_, i) => {
          const image = pressImage[i + gridStartPoint] || { src: "", alt: "" };

          return `
            <div class="grid-item">
              <img src="${image.src}" alt="${image.alt}" />
            </div>
            `;
        }).join("")}
      </div>
    `;
    }
  };

  function template() {
    return `
    <div class="grid-view">
      ${Array.from({ length: ITEM_PER_GRID }, () => {
        return `
        <div class="grid-item" src="" alt=""></div>
        `;
      }).join("")}
    </div>
  `;
  }

  function renderGirdSubsOverlay(target: HTMLElement) {
    resetGridSubsOverlay();
    const hasImages = target.querySelector("img")?.getAttribute("src");
    if (!hasImages) return;

    const gridSubsOverlay = document.createElement("div");
    gridSubsOverlay.classList.add("grid-overlay");
    gridSubsOverlay.innerHTML = GridSubsOverlay(target);
    target.prepend(gridSubsOverlay);

    currentOverlay = gridSubsOverlay;
  }

  function resetGridSubsOverlay() {
    if (currentOverlay) currentOverlay.remove();
  }

  function GridSubsOverlay(target: HTMLElement) {
    const { subsPress } = getState();
    const gridItem = target.closest(".grid-item");
    const pressName = gridItem!.querySelector("img")!.getAttribute("alt")!;
    const isSubs = subsPress.includes(pressName);

    return `
    <button class="grid-overlay__button">
      <div class="plus-shape"></div>
      ${isSubs ? `<div class="unsubs-button">해지하기</div>` : `<div class="text">구독하기</div>`}
    </button>
  `;
  }

  function toggleSubs(target: HTMLElement) {
    const { subsPress } = getState();
    const gridItem = target.closest(".grid-item");
    const pressName = gridItem!.querySelector("img")!.getAttribute("alt")!;

    if (subsPress.includes(pressName)) {
      return;
    } else {
      actions.pushSubs(pressName);
      resetGridSubsOverlay();
    }
  }

  function unSubsPress(target: HTMLElement) {
    const gridItem = target.closest(".grid-item");
    const pressName = gridItem!.querySelector("img")!.getAttribute("alt")!;

    return pressName;
  }

  return { template, render, unSubsPress, renderGirdSubsOverlay, resetGridSubsOverlay, toggleSubs };
};
