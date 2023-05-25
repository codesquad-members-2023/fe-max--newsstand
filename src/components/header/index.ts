import { $ } from "../../utils/domUtils";

export const initHeader = () => {
  addTitleEvent();
  updateDate();
};

const addTitleEvent = () => {
  const $title = $(".header__title");

  $title.addEventListener("click", () => window.location.reload());
};

const updateDate = () => {
  const $todayDate = $(".header__today-date");

  $todayDate.textContent = getFormattedDate();
};

const getFormattedDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };

  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};
