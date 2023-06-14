import { $, $$, render } from '../../../common/util';
import { Grid } from '../../../common/types';
import { store } from '../../../store';
import { GRID } from '../../../common/constant';
import { ACTION } from '../../../actions';
import { dispatch } from '../../../dispatch';

export function initAllGrid(state: Grid) {
  renderAllGrid(state);
  observeGridFn('grid');
  setGridEvent();
}

export function setGridEvent() {
  const leftBtn = $('.prev__grid');
  const rightBtn = $('.next__grid');

  leftBtn.addEventListener('click', () => {
    dispatch({ type: ACTION.GO_TO_PREV_GRID });
  });

  rightBtn.addEventListener('click', () => {
    dispatch({ type: ACTION.GO_TO_NEXT_GRID });
  });
}

function setGridItem() {
  const gridItems = [];
  for (let i = 0; i < GRID.GRID_NUM; i++) {
    gridItems.push('<div class="grid__items"></div>');
  }
  return gridItems.join('');
}

function setAllGrid() {
  return `
    <div class="press__grid">
      <img class="prev__grid" src="./asset/symbol/leftButton.svg" alt="<" />
        <div class="grid__wrapper">
          ${setGridItem()}
        </div>
      <img class="next__grid" src="./asset/symbol/rightButton.svg" alt=">" />
    </div>
  `;
}

function setGrid(state: Grid) {
  const grid = $$('.grid__items');

  for (let i = 0; i < grid.length; i++) {
    const pressCount = GRID.GRID_NUM * (state.curPage - 1) + i;
    const isOverLength = pressCount >= state.allGrid.length;
    const img = grid[i].querySelector('img');

    if (!isOverLength) {
      if (!img) {
        const newImg = document.createElement('img');
        grid[i].appendChild(newImg);
      }

      const curImg = grid[i].querySelector('img') as HTMLElement;
      curImg.setAttribute('src', state.allGrid[pressCount].src);
      curImg.setAttribute('alt', state.allGrid[pressCount].alt);
    }

    if (isOverLength) {
      img?.remove();
    }
  }
}

export function hideArrow(state: Grid) {
  const leftBtn = $('.prev__grid');
  const rightBtn = $('.next__grid');

  const isFirstPage = state.curPage === 1;
  const isLastPage = state.curPage === state.lastPage;

  isFirstPage ? leftBtn.classList.add('hide') : leftBtn.classList.remove('hide');
  isLastPage ? rightBtn.classList.add('hide') : rightBtn.classList.remove('hide');
}

export function renderAllGrid(state: Grid) {
  render($('.main__wrapper'), setAllGrid());
  setGrid(state);
  hideArrow(state);
}

export function observeGridFn(key: string) {
  store.subscribe(key, setGrid);
  store.subscribe(key, hideArrow);
}

export function ignoreGridFn(key: string) {
  store.unsubscribe(key, setGrid);
  store.unsubscribe(key, hideArrow);
}
