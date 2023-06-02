const LEFT_INDEX = 0;
const RIGHT_INDEX = 1;
const TIME_GAP = 1000;
const INTERVAL_TIME = 2000;
const DURATION = 600;
const INDEX_STEP = 2;

type Direction = "left" | "right";

export const Roller = (headlines: string[]) => {
  const containerLeft = document.querySelector(".headline-container-left") as HTMLElement;
  const containerRight = document.querySelector(".headline-container-right") as HTMLElement;
  const firstHeadLeft = containerLeft.firstChild!;
  const firstHeadRight = containerRight.firstChild!;
  const secondHeadLeft = firstHeadLeft.nextSibling!;
  const secondHeadRight = firstHeadRight.nextSibling!;

  const index: { left: number; right: number } = { left: LEFT_INDEX, right: RIGHT_INDEX };
  const isRolling: { left: boolean; right: boolean } = { left: true, right: true };
  const total = headlines.length;

  const render = () => {
    firstHeadLeft.textContent = headlines[LEFT_INDEX]!;
    firstHeadRight.textContent = headlines[RIGHT_INDEX]!;

    secondHeadLeft.textContent = headlines[LEFT_INDEX + INDEX_STEP]!;
    secondHeadRight.textContent = headlines[RIGHT_INDEX + INDEX_STEP]!;
  };

  const setEvent = () => {
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
  };

  const startRolling = () => {
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
  };

  const rolling = (container: HTMLElement, direction: Direction) => {
    moveUp(container);

    setTimeout(() => {
      resetPosition(container);
      setIndex(direction);
      changeText(container, direction);
    }, DURATION);
  };

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
    index[direction] %= total;
  }
  function changeText(container: HTMLElement, direction: Direction) {
    const currentIndex = index[direction];
    container.firstChild!.textContent = headlines[currentIndex!]!;
    container.firstChild!.nextSibling!.textContent = headlines[(currentIndex! + INDEX_STEP) % total]!;
  }

  return { render, setEvent, startRolling };
};
