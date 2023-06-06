import { $, $$ } from '../../../common/util';
import { State } from '../../../common/types';
import { MAIN } from '../../../common/constant';
import { ACTION } from '../../../actions';
import { dispatch } from '../../../dispatch';

export class Grid {
  constructor(private state: State) {
    this.setGrid(this.state);
    this.hideArrow(this.state);
    this.setEvent();
  }

  setGrid(state: State) {
    const grid = $$('.grid__items');

    for (let i = 0; i < grid.length; i++) {
      const pressCount = i + MAIN.GRID_NUM * (state.curPage - 1);
      const isOverLength = pressCount >= state.gridList.length;
      const img = grid[i].querySelector('img');

      if (!isOverLength) {
        if (!img) {
          const newImg = document.createElement('img');
          grid[i].appendChild(newImg);
        }

        const curImg = grid[i].querySelector('img');
        curImg?.setAttribute('src', state.gridList[pressCount].src);
        curImg?.setAttribute('alt', state.gridList[pressCount].alt);
      }

      if (isOverLength) {
        img?.remove();
      }
    }
  }

  hideArrow(state: State) {
    const leftBtn = $('.grid__left');
    const rightBtn = $('.grid__right');

    if (state.curPage === 1) {
      leftBtn.classList.add('hide');
    } else {
      leftBtn.classList.remove('hide');
    }

    if (state.curPage === state.lastPage) {
      rightBtn.classList.add('hide');
    } else {
      rightBtn.classList.remove('hide');
    }
  }

  setEvent() {
    const leftBtn = $('.grid__left');
    const rightBtn = $('.grid__right');

    leftBtn.addEventListener('click', () => {
      dispatch({ type: ACTION.GO_TO_PREV });
    });

    rightBtn.addEventListener('click', () => {
      dispatch({ type: ACTION.GO_TO_NEXT });
    });
  }
}
