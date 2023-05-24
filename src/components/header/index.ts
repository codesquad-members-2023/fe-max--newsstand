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

  $todayDate.textContent = getDate();
};

const getDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = weekdays[now.getDay()];

  return `${year}.${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")}. ${dayOfWeek}요일`;
};
