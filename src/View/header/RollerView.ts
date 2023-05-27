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
    createInitialHeadline(containerLeft, containerRight, state);
    handleRolling(containerLeft, containerRight);
  }
  if (headlineLeft && headlineRight) {
    setEvent(headlineLeft, headlineRight);
  }
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
};

const handleRolling = (containerLeft: HTMLElement, containerRight: HTMLElement) => {
  containerLeft.style.transition = 'transform 0.5s';
  setInterval(() => {
    const state = model.getState();

    if (!state.leftRolling) {
      return;
    }
    if (state.leftRolling) {
      if (state.leftRollingAmount === 0) {
        containerLeft.style.transition = '';
        containerLeft.firstElementChild?.remove();
        const lastElem = document.createElement('div');
        if (lastElem) {
          state.leftNextIndex += 2;
          lastElem.textContent = state.headlines[state.leftNextIndex];
        }
        containerLeft.appendChild(lastElem);

        if (state.leftNextIndex === 8) {
          state.leftNextIndex = -2;
        }
      }

      containerLeft.style.transform = `translateY(${-37 * state.leftRollingAmount}px)`;
      state.leftRollingAmount++;

      if (state.leftRollingAmount === 2) {
        intent.setLeftRollingAmount();
        containerLeft.style.transition = 'transform 0.5s';
      }
    }
  }, 2000);

  setTimeout(() => {
    containerRight.style.transition = 'transform 0.5s';
    setInterval(() => {
      const state = model.getState();

      if (!state.rightRolling) {
        return;
      }
      if (state.rightRolling) {
        if (state.rightRollingAmount === 0) {
          containerRight.style.transition = '';
          containerRight.firstElementChild?.remove();
          const lastElem = document.createElement('div');
          if (lastElem) {
            state.rightNextIndex += 2;
            lastElem.textContent = state.headlines[state.rightNextIndex];
          }
          containerRight.appendChild(lastElem);

          if (state.rightNextIndex === 9) {
            state.rightNextIndex = -1;
          }
        }

        containerRight.style.transform = `translateY(${-37 * state.rightRollingAmount}px)`;
        state.rightRollingAmount++;

        if (state.rightRollingAmount === 2) {
          intent.setRightRollingAmount();
          containerRight.style.transition = 'transform 0.5s';
        }
      }
    }, 2000);
  }, 1000);
};

const setEvent = (headlineLeft: HTMLElement, headlineRight: HTMLElement) => {
  headlineLeft.addEventListener('mouseenter', intent.handleLeftMouseEnter);
  headlineRight.addEventListener('mouseenter', intent.handleRightMouseEnter);
  headlineLeft.addEventListener('mouseout', intent.handleLeftMouseLeave);
  headlineRight.addEventListener('mouseout', intent.handleRightMouseLeave);
};

// [속보] 쿤디, '돼지파스타 맛있어서 돼지된 것 같아...'
//[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 '이 맛 못끊어...'

//GPT 코드
// const handleRolling = (container: HTMLElement, stateKeys: {rolling: string, rollingAmount: string, nextIndex: string}) => {
//   container.style.transition = 'transform 0.5s';
//   setInterval(() => {
//     const state = model.getState();

//     if (!state[stateKeys.rolling]) {
//       return;
//     }

//     if (state[stateKeys.rollingAmount] === 0) {
//       container.style.transition = '';
//       container.firstElementChild?.remove();
//       const lastElem = document.createElement('div');
//       if (lastElem) {
//         state[stateKeys.nextIndex] += 2;
//         lastElem.textContent = state.headlines[state[stateKeys.nextIndex]];
//       }
//       container.appendChild(lastElem);

//       if (state[stateKeys.nextIndex] === (stateKeys.nextIndex === 'leftNextIndex' ? 8 : 9)) {
//         state[stateKeys.nextIndex] = stateKeys.nextIndex === 'leftNextIndex' ? -2 : -1;
//       }
//     }

//     container.style.transform = `translateY(${-37 * state[stateKeys.rollingAmount]}px)`;
//     state[stateKeys.rollingAmount]++;

//     if (state[stateKeys.rollingAmount] === 2) {
//       if (stateKeys.rolling === 'leftRolling') {
//         intent.setLeftRollingAmount();
//       } else {
//         intent.setRightRollingAmount();
//       }
//       container.style.transition = 'transform 0.5s';
//     }
//   }, 2000);
// };

// const handleRollingForBoth = (containerLeft: HTMLElement, containerRight: HTMLElement) => {
//   handleRolling(containerLeft, {rolling: 'leftRolling', rollingAmount: 'leftRollingAmount', nextIndex: 'leftNextIndex'});
//   setTimeout(() => {
//     handleRolling(containerRight, {rolling: 'rightRolling', rollingAmount: 'rightRollingAmount', nextIndex: 'rightNextIndex'});
//   }, 1000);
// };
