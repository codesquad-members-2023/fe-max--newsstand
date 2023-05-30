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

    model.subscribe('currentPage', () => renderButton(nextButton, prevButton));
    model.subscribe('gridStartPoint', () => renderGrid(gridView));

    model.subscribe('isInsideGrid', () => renderOverlay());
    model.subscribe('currentEnterGrid', () => renderOverlay());
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
    const gridOverlay = createGridOverlay();

    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const gridImage = document.createElement('img');
    gridImage.setAttribute('src', `${state.images[i]}`);

    gridItem.appendChild(gridOverlay);
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

const renderOverlay = () => {
  const state = model.getState();

  if (state.currentOverlay) {
    state.currentOverlay.style.display = 'none';
  }
  if (state.isInsideGrid) {
    if (state.currentEnterGrid) {
      const currentOverlay = state.currentEnterGrid.firstElementChild;
      if (currentOverlay instanceof HTMLElement) {
        currentOverlay.style.display = 'flex';
        intent.handleHoverOverlay(currentOverlay);
      }
    }
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

export default {
  mediaInitialize,
};
