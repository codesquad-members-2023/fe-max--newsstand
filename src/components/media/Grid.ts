import { actions } from "../../actions/actions";
import { renderUnSubsAlert } from "../../app";
import { ITEM_PER_GRID } from "../../constants/constant";
import { getState } from "../../store/store";

export type Images = { src: string; alt: string }[];

export const Grid = (totalImages: Images) => {
  let isInsideGrid = false;
  let currentOverlay: HTMLElement | null = null;
  let currentEnterGrid: HTMLElement | null = null;
  const media = document.querySelector(".media") as HTMLElement;
  const unSubsAlert = document.querySelector(".unsubs-alert") as HTMLElement;
  const gridView = document.querySelector(".grid-view") as HTMLElement;

  createGridItems(totalImages);

  const render = () => {
    const { gridStartPoint, currentViewMode, currentPressMode, subsPress } = getState();
    console.log(subsPress);
    const isTotalPressMode = currentPressMode === "total";
    if (currentViewMode === "grid") {
      const gridItems = gridView.children;
      const subsImages = totalImages.filter((image) => subsPress.includes(image.alt));
      console.log(currentPressMode);
      const images = isTotalPressMode ? totalImages : subsImages;

      for (let i = 0; i < ITEM_PER_GRID; i++) {
        const gridImage = gridItems[i]!.querySelector("img");

        if (gridImage) {
          if (images[i + gridStartPoint]) {
            gridImage.setAttribute("src", images[i + gridStartPoint]!.src);
            gridImage.setAttribute("alt", images[i + gridStartPoint]!.alt);
          } else {
            gridImage.setAttribute("src", "");
            gridImage.setAttribute("alt", "");
          }
        }
      }
    }
    renderButton();
  };

  function handleMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (target.className === "unsubs-button") {
      console.log(target);
      const pressInfo = target.closest(".grid-item");
      const pressName = pressInfo!.querySelector("img")!.getAttribute("alt")!;

      renderUnSubsAlert(pressName);
    }
    if (target.className === "grid-item") {
      const currentTarget = relatedTarget.closest(".grid-item");
      if (target.closest(".grid-item") === currentTarget) {
        e.preventDefault();
        return;
      }
      currentEnterGrid = target;
      isInsideGrid = true;
      renderOverlay();
    }
  }

  const setEvent = () => {
    gridView.addEventListener("mouseover", (e) => handleMouseOver(e));
    media.addEventListener("click", (e) => handleClickMedia(e));

    // gridItems.forEach((gridItem) => {
    //   gridItem.addEventListener("mouseover", (e) => {
    //     const target: EventTarget | null = e.target;
    //     if (target instanceof HTMLElement && target.classList.contains("grid-item")) {
    //       currentEnterGrid = target;
    //       isInsideGrid = true;
    //       renderOverlay();
    //     }
    //   });
    // });

    gridView.addEventListener("mouseleave", () => {
      isInsideGrid = false;
      renderOverlay();
    });

    gridView.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (isButtonClicked(target)) {
        toggleSubs(target);
      }
    });
  };

  function renderOverlay() {
    if (currentOverlay) {
      currentOverlay.style.display = "none";
    }
    if (!isInsideGrid) resetOverlay();

    if (isInsideGrid && currentEnterGrid) {
      currentOverlay = currentEnterGrid.firstElementChild as HTMLElement;
      const hasImage = currentEnterGrid.querySelector("img")?.getAttribute("src");
      if (hasImage) {
        currentOverlay.style.display = "flex";
      }
    }
  }
  function resetOverlay() {
    currentOverlay = null;
    currentEnterGrid = null;
  }

  function handleClickMedia(e: Event) {
    const target = e.target as HTMLElement;
    if (target.className === "button no") {
      closeUnSubsAlert();
      return;
    }
    if (target.className === "button yes") {
      const unSubsAlert = target.closest(".unsubs-alert") as HTMLElement;

      const pressName = unSubsAlert.querySelector("span")!.textContent!;
      closeUnSubsAlert();

      actions.popSubs(pressName);
      localStorage.removeItem("pressName");
    }
  }
  function closeUnSubsAlert() {
    unSubsAlert.style.display = "none";
  }

  function isButtonClicked(target: HTMLElement) {
    return target.closest(".grid-overlay__button");
  }
  function toggleSubs(target: HTMLElement) {
    const { subsPress } = getState();
    console.log(target);
    const currentOverlay = target.closest("grid-overlay") as HTMLElement;
    const gridItem = target.closest(".grid-item");
    const pressName = gridItem!.querySelector("img")!.getAttribute("alt")!;

    if (subsPress.includes(pressName)) {
      actions.popSubs(pressName);
    } else {
      actions.pushSubs(pressName);
      currentOverlay.style.display = "none";
    }
  }
  function renderButton() {
    const { currentViewMode, subsPress } = getState();
    if (currentViewMode === "grid") {
      const gridItems = gridView.querySelectorAll(".grid-item");

      gridItems.forEach((gridItem) => {
        const pressName = gridItem!.querySelector("img")!.getAttribute("alt")!;
        const textNode = gridItem.querySelector(".text")!;
        if (subsPress.includes(pressName)) {
          // textNode.textContent = "해지하기";
          textNode.innerHTML = `<div class="unsubs-button">해지하기<div>`;
        } else {
          textNode.textContent = "구독하기";
        }
      });
    }
  }

  function createGridItems(images: Images) {
    for (let i = 0; i < ITEM_PER_GRID; i++) {
      const gridOverlay = createGridOverlay();

      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      const gridImage = document.createElement("img");
      gridImage.setAttribute("src", images[i]!.src!);
      gridImage.setAttribute("alt", images[i]!.alt!);

      gridItem.appendChild(gridOverlay);
      gridItem.appendChild(gridImage);
      gridView.appendChild(gridItem);
    }
  }
  function createGridOverlay() {
    const gridOverlay = document.createElement("div");
    gridOverlay.classList.add("grid-overlay");

    const overlayButton = document.createElement("button");
    overlayButton.classList.add("grid-overlay__button");
    gridOverlay.appendChild(overlayButton);

    const plusShape = document.createElement("div");
    plusShape.classList.add("plus-shape");

    const textBox = document.createElement("div");
    textBox.classList.add("text");
    textBox.textContent = "구독하기";

    overlayButton.appendChild(plusShape);
    overlayButton.appendChild(textBox);

    return gridOverlay;
  }

  return { render, setEvent };
};
