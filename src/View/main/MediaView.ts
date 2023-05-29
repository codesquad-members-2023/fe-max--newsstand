import model from '../../Model/MediaModel';
import intent from '../../Intent/MediaIntent';

export const mediaInitialize = () => {
  const gridView: HTMLElement | null = document.querySelector('.grid-view');
  const nextButton: HTMLElement | null = document.querySelector('.next-button');
  const prevButton: HTMLElement | null = document.querySelector('.prev-button');

  if (gridView && nextButton && prevButton) {
    createGridItems(gridView);
    renderButton(nextButton, prevButton);
    setEvent(nextButton, prevButton, gridView);

    //현재 페이지가 변할 때
    model.subscribe('currentPage', () => renderButton(nextButton, prevButton));
    model.subscribe('gridStartPoint', () => renderGrid(gridView));
    //그리드 아이템에 호버할 때 오버레이의 변화
    model.subscribe('isInsideGrid', () => renderOverlay(gridView));
    model.subscribe('currentEnterGrid', () => renderOverlay(gridView));
    //의존성이 있는 '상태'를 키로 두고, 그 상태가 변경될 때 실행해야할 함수를 모델의 리스너에 구독
  }
};

const setEvent = (nextButton: HTMLElement, prevButton: HTMLElement, gridView: HTMLElement) => {
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', intent.handleNextButtonClick);
    prevButton.addEventListener('click', intent.handlePrevButtonClick);
  }
  if (gridView) {
    const gridItems = gridView.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
      gridItem.addEventListener('mouseenter', (e) => {
        const target: EventTarget | null = e.target;
        if (target instanceof HTMLElement && target.classList.contains('grid-item')) {
          intent.handleMouseEnter(target);
        }
      });
    });
    gridView.addEventListener('mouseleave', intent.handleGridLeave);
  }
};

const createGridItems = (gridView: HTMLElement) => {
  const state = model.getState();

  for (let i = 0; i < state.itemsPerGrid; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const gridImage = document.createElement('img');
    gridImage.setAttribute('src', `${state.images[i]}`);

    gridItem.appendChild(gridImage);
    gridView.appendChild(gridItem);
  }
};

const renderButton = (nextButton: HTMLElement, prevButton: HTMLElement) => {
  const state = model.getState();

  if (state.currentPage === 1) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }
  if (state.currentPage < state.images.length / state.itemsPerGrid) {
    nextButton.style.display = 'block';
  } else {
    nextButton.style.display = 'none';
  }
};
const renderGrid = (gridView: HTMLElement) => {
  const state = model.getState();

  const gridItems = gridView.children;
  for (let i = 0; i < state.itemsPerGrid; i++) {
    const gridImage: HTMLElement | null = gridItems[i].querySelector('img');
    if (gridImage) {
      gridImage.setAttribute('src', state.images[i + state.gridStartPoint]);
    }
  }
};

const renderOverlay = (gridView: HTMLElement) => {
  const state = model.getState();

  if (state.isInsideGrid) {
    state.currentOverlay?.remove();
    //없으면 아무것도 안해도 되서 있을때만 동작하면 괜찮으니 옵셔널 체이닝 사용
    const gridOverlayElements = gridView.getElementsByClassName('grid-overlay');
    if (state.currentEnterGrid) {
      if (gridOverlayElements.length > 0) {
        return;
      }
      const currentOverlay = createGridOverlay();
      state.currentEnterGrid.prepend(currentOverlay);
      intent.handleHoverOverlay(currentOverlay);
    }
  } else {
    state.currentOverlay?.remove(); //위와 동일
    return;
  }
};
const createGridOverlay = () => {
  const gridOverlay = document.createElement('div');
  gridOverlay.classList.add('grid-overlay');

  const overlayButton = document.createElement('button');
  overlayButton.classList.add('grid-overlay__button');
  gridOverlay.appendChild(overlayButton);

  const plusShape = document.createElement('div');
  plusShape.classList.add('plus-shape');

  const textBox = document.createElement('div');
  textBox.classList.add('text');
  textBox.textContent = '구독하기';

  overlayButton.appendChild(plusShape);
  overlayButton.appendChild(textBox);

  return gridOverlay;
};

// render(nextButton: HTMLElement, prevButton:HTMLElement, gridView:HTMLElement){

// }
export default {
  mediaInitialize,
};
