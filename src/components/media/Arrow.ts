import { getState } from "../../store/store";

export function Arrow() {
  return `
  <img class="prev-button" src="/public/images/prev-button.svg"></img>
  <img class="next-button" src="/public/images/next-button.svg"></img>`;
}

export function renderArrow(prevButton:HTMLElement,nextButton:HTMLElement) {
  const { currentPage, currentLastPage, currentViewMode } = getState();
  
  if (currentViewMode === "grid") {
    prevButton.style.display = currentPage === 1 ? "none" : "block";
    nextButton.style.display = currentPage < currentLastPage ? "block" : "none";
    return;
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }
}
