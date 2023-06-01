import intent from '../../Intent/RollerIntent';
import model from '../../Model/RollerModel';
import { RollerState } from '../../Model/RollerModel';

export const rollerInitialize = () => {
  const containerLeft: HTMLElement | null = document.querySelector('.headline-container-left');
  const containerRight: HTMLElement | null = document.querySelector('.headline-container-right');

  const headlineLeft: HTMLElement | null = document.querySelector('.headline.left');
  const headlineRight: HTMLElement | null = document.querySelector('.headline.right');

  const state = model.getState();

  if (containerLeft && containerRight) {
    const [firstLeftHeadline, secondLeftHeadline, firstRightHeadline, secondRightHeadline] = createInitialHeadline(
      containerLeft,
      containerRight,
      state,
    );

    handleRolling(
      containerLeft,
      containerRight,
      firstLeftHeadline,
      secondLeftHeadline,
      firstRightHeadline,
      secondRightHeadline,
    );
  }
  if (headlineLeft && headlineRight) {
    setEvent(headlineLeft, headlineRight);
  }
};

const setEvent = (headlineLeft: HTMLElement, headlineRight: HTMLElement) => {
  headlineLeft.addEventListener('mouseenter', intent.handleLeftMouseEnter);
  headlineRight.addEventListener('mouseenter', intent.handleRightMouseEnter);
  headlineLeft.addEventListener('mouseout', intent.handleLeftMouseLeave);
  headlineRight.addEventListener('mouseout', intent.handleRightMouseLeave);
};

const createInitialHeadline = (containerLeft: HTMLElement, containerRight: HTMLElement, state: RollerState) => {
  const firstLeftHeadline = document.createElement('div');
  const firstRightHeadline = document.createElement('div');
  firstLeftHeadline.textContent = state.headlines[0];
  firstRightHeadline.textContent = state.headlines[1];

  const secondLeftHeadline = document.createElement('div');
  const secondRightHeadline = document.createElement('div');
  secondLeftHeadline.textContent = state.headlines[2];
  secondRightHeadline.textContent = state.headlines[3];

  containerLeft.appendChild(firstLeftHeadline);
  containerRight.appendChild(firstRightHeadline);

  containerLeft.appendChild(secondLeftHeadline);
  containerRight.appendChild(secondRightHeadline);

  return [firstLeftHeadline, secondLeftHeadline, firstRightHeadline, secondRightHeadline];
};

const handleRolling = (
  containerLeft: HTMLElement,
  containerRight: HTMLElement,
  firstLeftHeadline: HTMLElement,
  secondLeftHeadline: HTMLElement,
  firstRightHeadline: HTMLElement,
  secondRightHeadline: HTMLElement,
) => {
  const deltaTime = 1000;
  const rollingPeriod = 1500;

  setInterval(() => {
    rolling(containerLeft, 'left', firstLeftHeadline, secondLeftHeadline);

    setTimeout(() => {
      rolling(containerRight, 'right', firstRightHeadline, secondRightHeadline);
    }, deltaTime);
  }, rollingPeriod);
};

const rolling = (
  containerElem: HTMLElement,
  direction: string,
  firstHeadline: HTMLElement,
  secondHeadline: HTMLElement,
) => {
  const isRolling = `${direction}Rolling`;
  const nextIndex = `${direction}NextIndex`;
  const duration = 500;
  const indexIncrement = 2;

  const state = model.getState();
  const isLeft = direction === 'left';

  if (state[isRolling]) {
    moveContainerUp(containerElem);
    setTimeout(() => {
      resetContainerPosition(containerElem);

      let [currentIndex, useNextIndex] = updateIndex(state[nextIndex] as number, indexIncrement);

      updateTextContent(firstHeadline, secondHeadline, state.headlines, currentIndex, useNextIndex);
    }, duration);
    resetRollingSetting(isLeft, containerElem);
  }
};

const moveContainerUp = (element: HTMLElement) => {
  element.style.transform = 'translateY(-37px)';
};
const resetContainerPosition = (element: HTMLElement) => {
  element.style.transition = '';
  element.style.transform = 'translateY(0px)';
};

const updateIndex = (baseIndex: number, increment: number) => {
  const currentIndex: number = baseIndex % 10;
  const useNextIndex: number = (baseIndex + increment) % 10;

  return [currentIndex, useNextIndex];
};

const updateTextContent = (
  first: HTMLElement,
  second: HTMLElement,
  headlines: string[],
  currentIndex: number,
  useNextIndex: number,
) => {
  first.textContent = headlines[currentIndex];
  second.textContent = headlines[useNextIndex];
};

const resetRollingSetting = (isLeft: boolean, element: HTMLElement) => {
  isLeft ? intent.leftIncreaseNextIndex() : intent.rightIncreaseNextIndex();
  element.style.transition = 'transform 0.5s';
};

// [속보] 쿤디, '돼지파스타 맛있어서 돼지된 것 같아...'
//[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 '이 맛 못끊어...'
