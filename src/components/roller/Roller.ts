const LEFT_INDEX = 0;
const RIGHT_INDEX = 1;
const TIME_GAP = 1000;
const INTERVAL_TIME = 2000;
const DURATION = 600;
const INDEX_STEP = 2;

type Direction = "left" | "right";

export function Roller(headlines: string[]) {
  const roller = document.querySelector(".roller");
  const index: { left: number; right: number } = { left: LEFT_INDEX, right: RIGHT_INDEX };
  const isRolling: { left: boolean; right: boolean } = { left: true, right: true };
  const TOTAL = headlines.length;

  render();

  const containerLeft = document.querySelector(".news__container.left") as HTMLElement;
  const containerRight = document.querySelector(".news__container.right") as HTMLElement;

  startRolling();
  setEvent();

  function startRolling() {
    setInterval(() => {
      if (isRolling.left) {
        rolling(containerLeft, "left");
      }
      setTimeout(() => {
        if (isRolling.right) {
          rolling(containerRight, "right");
        }
      }, TIME_GAP);
    }, INTERVAL_TIME);
  }

  function rolling(container: HTMLElement, direction: Direction) {
    moveUp(container);

    setTimeout(() => {
      resetPosition(container);
      setIndex(direction);
      renderTitle(container, direction);
    }, DURATION);
  }

  function moveUp(container: HTMLElement) {
    container.style.transition = "transform 0.5s";
    container.style.transform = "translateY(-37px)";
  }

  function resetPosition(container: HTMLElement) {
    container.style.transition = "";
    container.style.transform = "translateY(0px)";
  }

  function setIndex(direction: Direction) {
    index[direction] += INDEX_STEP;
    index[direction] %= TOTAL;
  }

  function renderTitle(container: HTMLElement, direction: Direction) {
    container.innerHTML = `
    <div class="news__title">${headlines[index[direction]]}</div>
          <div class="news__title">${headlines[(index[direction] + INDEX_STEP) % TOTAL]}</div>
    `;
  }

  function render() {
    roller!.innerHTML = `
    <div class="roller__bar left">
      <div class="press-name">연합뉴스</div>
      <div class="news__bar left">
        <div class="news__container left">
          <div class="news__title">${headlines[index.left]}</div>
          <div class="news__title">${headlines[index.left + INDEX_STEP]}</div>
        </div>
      </div>
    </div>
    <div class="roller__bar right">
      <div class="press-name">연합뉴스</div>
      <div class="news__bar right">
        <div class="news__container right">
          <div class="news__title">${headlines[index.right]}</div>
          <div class="news__title">${headlines[index.right + INDEX_STEP]}</div>
        </div>
      </div>
    </div>
    `;
  }

  function setEvent() {
    containerLeft.addEventListener("mouseenter", () => {
      isRolling.left = !isRolling.left;
    });
    containerRight.addEventListener("mouseenter", () => {
      isRolling.right = !isRolling.right;
    });
    containerLeft.addEventListener("mouseleave", () => {
      isRolling.left = !isRolling.left;
    });
    containerRight.addEventListener("mouseleave", () => {
      isRolling.right = !isRolling.right;
    });
  }
}
