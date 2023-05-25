import { $ } from "../../utils/domUtils";
import { RollingNewsBar } from "./rollingNewsBar";

export const initRollingNewsBar = async () => {
  const leftRollingNewsBar = new RollingNewsBar();
  const rightRollingNewsBar = new RollingNewsBar();

  const $rollingNewsBarSection = $(".rolling-news-bar-section");
  $rollingNewsBarSection.append(leftRollingNewsBar.getElement(), rightRollingNewsBar.getElement());

  const data = await fetchRollingNewsData();
  const halfDataLength = Math.floor(data.length / 2);

  leftRollingNewsBar.setNewsData(data.slice(0, halfDataLength));
  rightRollingNewsBar.setNewsData(data.slice(halfDataLength));

  leftRollingNewsBar.updateRender();
  rightRollingNewsBar.updateRender();

  leftRollingNewsBar.startRolling();
  window.setTimeout(() => {
    rightRollingNewsBar.startRolling();
  }, 1000);
};

const fetchRollingNewsData = async () => {
  const response = await fetch("http://localhost:8080/rolling-news");

  return await response.json();
};
