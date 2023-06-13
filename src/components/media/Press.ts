import { getState } from "../../store/store";

export function Press() {
  return `
  <div class="press-tab">
    <div class="press-tab__total">전체 언론사</div>
    <div class="press-tab__my-subs">내가 구독한 언론사</div>
  </div>
  `;
}

export function renderPressTab(totalPress: HTMLElement, mySubsPress: HTMLElement) {
  const { currentPressMode } = getState();
  const isTotalPressMode = currentPressMode === "total";

  totalPress.style.cssText = isTotalPressMode
    ? "line-height: 19.09px; font-weight: 700; color: #000;"
    : "line-height: 22px; font-weight: 500; color: #879298;";

  mySubsPress.style.cssText = isTotalPressMode
    ? "line-height: 22px; font-weight: 500; color: #879298;"
    : "line-height: 19.09; font-weight: 700; color: #000;";
}
