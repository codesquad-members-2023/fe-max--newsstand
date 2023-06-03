import { actions } from "../../actions/actions";
import { getState } from "../../store/store";

export const Media = () => {
  const prevButton = document.querySelector(".prev-button") as HTMLElement;
  const nextButton = document.querySelector(".next-button") as HTMLElement;

  const render = () => {
    const { currentPage, currentLastPage } = getState();
    console.log(currentPage);
    if (currentPage === 1) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }
    if (currentPage! < currentLastPage!) {
      nextButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }
  };

  const setEvent = () => {
    prevButton!.addEventListener("click", actions.goPrevPage);
    nextButton!.addEventListener("click", actions.goNextPage);
  };

  return { setEvent, render };
};
