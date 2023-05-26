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
        const target: EventTarget | null = e.target as HTMLElement;
        if (target instanceof HTMLElement && target.classList.contains('grid-item')) {
          intent.handleMouseEnter(target);
        }
      });
    });

    gridView.addEventListener('mouseleave', intent.handleGridLeave);
  }
};

function displayOverlay(gridView: HTMLElement) {
  const state = model.getState();
  if (state.isInsideGrid) {
    state.currentOverlay?.remove();

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
    state.currentOverlay?.remove();
    return;
  }
}

function render(gridView: HTMLElement, nextButton: HTMLElement, prevButton: HTMLElement) {
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
}

// createTotalMedia() {
//   const totalMedia = document.createElement('div');
//   totalMedia.classList.add('total-media');
//   totalMedia.appendChild(this.tabBar);
//   totalMedia.appendChild(this.grid);

//   this.app?.appendChild(totalMedia);
// }

// createTabBar() {
//   const tabBar = document.createElement('div');
//   tabBar.classList.add('total-media__tab-bar');
//   tabBar.innerHTML = `
//     <div class="press-tab">
//       <div class="press-tab__total">전체 언론사</div>
//       <div class="press-tab__my-subs">내가 구독한 언론사</div>
//     </div>
//     <div class="view-tab">
//       <svg class="view-tab__list" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M16 2V16H2V2H16ZM17.1 0H0.9C0.4 0 0 0.4 0 0.9V17.1C0 17.5 0.4 18 0.9 18H17.1C17.5 18 18 17.5 18 17.1V0.9C18 0.4 17.5 0 17.1 0ZM8 4H14V6H8V4ZM8 8H14V10H8V8ZM8 12H14V14H8V12ZM4 4H6V6H4V4ZM4 8H6V10H4V8ZM4 12H6V14H4V12Z"
//           fill="currentColor"
//         />
//       </svg>
//       <svg class="view-tab__grid" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M0 8V0H8V8H0ZM0 18V10H8V18H0ZM10 8V0H18V8H10ZM10 18V10H18V18H10ZM2 6H6V2H2V6ZM12 6H16V2H12V6ZM12 16H16V12H12V16ZM2 16H6V12H2V16Z" fill="currentColor" />
//       </svg>
//     </div>`;

//   return tabBar;
// }
// createGrid() {
//   const grid = document.createElement('div');
//   grid.classList.add('grid');
//   grid.innerHTML = this.gridTemplate();

//   return grid;
// }

// gridTemplate() {
//   return `
//   <div class="grid-view">
//     <div class="grid-item">언론사이미지</div>
//   </div>
//   <img class="right-button" src="/public/images/right-button.svg"></img>
//   `;
// }

// render(state) {
//   this.grid.innerHTML = ``;
// }

export default {
  mediaInitialize,
};
