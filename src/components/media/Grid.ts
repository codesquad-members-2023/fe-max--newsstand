import { getState } from "../../store/store";

const ITEM_PER_GRID = 24;

type Images = string[];

export const Grid = (images: Images) => {
  let isInsideGrid = false;
  let currentOverlay: HTMLElement | null = null;
  let currentEnterGrid: HTMLElement | null = null;
  let subsPress: string[] = [];

  const gridView = document.querySelector(".grid-view") as HTMLElement;

  createGridItems(images);

  const render = () => {
    const { gridStartPoint } = getState();

    const gridItems = gridView.children;
    for (let i = 0; i < ITEM_PER_GRID; i++) {
      const gridImage: HTMLElement | null = gridItems[i]!.querySelector("img");
      if (gridImage) {
        gridImage.setAttribute("src", images[i + gridStartPoint]!);
      }
    }
  };

  const setEvent = () => {
    const gridItems = gridView.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem) => {
      gridItem.addEventListener("mouseenter", (e) => {
        const target: EventTarget | null = e.target;
        if (target instanceof HTMLElement && target.classList.contains("grid-item")) {
          currentEnterGrid = target;
          isInsideGrid = true;
          renderOverlay();
        }
      });
    });

    gridView.addEventListener("mouseleave", () => {
      isInsideGrid = false;
      renderOverlay();
    });

    gridView.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (isButtonClicked(target)) {
        toggleSubs(target);
        renderButton();
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
      currentOverlay.style.display = "flex";
    }
  }
  function resetOverlay() {
    currentOverlay = null;
    currentEnterGrid = null;
  }

  function isButtonClicked(target: HTMLElement) {
    return target.closest(".grid-overlay__button");
  }
  function toggleSubs(target: HTMLElement) {
    const gridItem = target.closest(".grid-item");
    const imageSRC = gridItem!.querySelector("img")!.getAttribute("src")!;

    if (subsPress.includes(imageSRC)) {
      subsPress = subsPress.filter((press) => press !== imageSRC);
    } else {
      subsPress.push(imageSRC);
    }
  }
  function renderButton() {
    const gridItems = gridView.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem) => {
      const imageSRC = gridItem!.querySelector("img")!.getAttribute("src")!;
      if (subsPress.includes(imageSRC)) {
        gridItem.querySelector(".text")!.textContent = "해지하기";
      } else {
        gridItem.querySelector(".text")!.textContent = "구독하기";
      }
    });
  }

  function createGridItems(images: Images) {
    for (let i = 0; i < ITEM_PER_GRID; i++) {
      const gridOverlay = createGridOverlay();

      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      const gridImage = document.createElement("img");
      gridImage.setAttribute("src", images[i]!);

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

  return { render, setEvent, renderButton };
};
