import model from '../../Model/MediaModel';
import intent from '../../Intent/MediaIntent';

export const mediaInitialize = () => {
  const gridView: HTMLElement | null = document.querySelector('.grid-view');
  const nextButton: HTMLElement | null = document.querySelector('.next-button');
  const prevButton: HTMLElement | null = document.querySelector('.prev-button');

  if (gridView && nextButton && prevButton) {
    createGridItems(gridView);
    render(gridView, nextButton, prevButton);
    setEvent(nextButton, prevButton, gridView);

    model.subscribe(() => render(gridView, nextButton, prevButton));
    model.subscribe(() => displayOverlay(gridView));
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

const render = (gridView: HTMLElement, nextButton: HTMLElement, prevButton: HTMLElement) => {
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

  const gridItems = gridView.children;

  for (let i = 0; i < state.itemsPerGrid; i++) {
    const gridImage: HTMLElement | null = gridItems[i].querySelector('img');
    if (gridImage) {
      gridImage.setAttribute('src', state.images[i + state.startPoint]);
    }
  }
};

const displayOverlay = (gridView: HTMLElement) => {
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
      state.currentOverlay = currentOverlay;
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

export default {
  mediaInitialize,
};
