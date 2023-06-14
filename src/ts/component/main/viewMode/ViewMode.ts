import { initAllGrid, ignoreGridFn } from '../grid/Grid';
import { initAllList, ignoreListFn, autoNextList } from '../list/List';
import { State, ViewMode } from '../../../common/types';
import { store } from '../../../store';
import { dispatch } from '../../../dispatch';
import { ACTION } from '../../../actions';

export function initViewMode(state: State) {
  setViewModeEvent();
  setModeBtn(state.viewMode);
  observeViewMode('viewMode');
}

function observeViewMode(key: string) {
  store.subscribe(key, setModeBtn);
  store.subscribe(key, restartMode);
}

function setViewModeEvent() {
  const viewAll = document.querySelector('.all') as HTMLElement;
  const viewSubs = document.querySelector('.subs') as HTMLElement;
  const modeList = document.querySelector('.list') as HTMLElement;
  const modeGrid = document.querySelector('.grid') as HTMLElement;
  const viewModeWrapper = document.querySelector('.press__header') as HTMLElement;

  viewModeWrapper.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    switch (target) {
      case viewAll:
        viewAll.classList.add('focus');
        viewSubs.classList.remove('focus');
        break;
      case viewSubs:
        viewAll.classList.remove('focus');
        viewSubs.classList.add('focus');
        break;
      case modeList:
        dispatch({ type: ACTION.MODE_LIST });
        break;
      case modeGrid:
        dispatch({ type: ACTION.MODE_GRID });
        break;
    }
  });
}

function setModeBtn(state: ViewMode) {
  const gridBtn = document.querySelector('.grid') as HTMLElement;
  const listBtn = document.querySelector('.list') as HTMLElement;

  switch (state.viewMode) {
    case 'allGrid':
      listBtn.setAttribute('src', './asset/symbol/list.svg');
      gridBtn.setAttribute('src', './asset/symbol/grid-activated.svg');
      break;
    case 'allList':
      listBtn.setAttribute('src', './asset/symbol/list-activated.svg');
      gridBtn.setAttribute('src', './asset/symbol/grid.svg');
      break;
  }
}

function restartMode(state: ViewMode) {
  switch (state.viewMode) {
    case 'allGrid':
      ignoreListFn('list');
      initAllGrid(store.getState().grid);
      clearInterval(autoNextList);
      break;
    case 'allList':
      ignoreGridFn('grid');
      clearInterval(autoNextList);
      initAllList(store.getState().list);
      break;
  }
}
