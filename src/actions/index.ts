import * as types from './ActionTypes';
import { store } from '..';

export const Actions = {
  roll(position: string) {
    store.dispatch({
      type: types.ROLLING,
      position: position,
    });
  },

  showAllTab() {
    store.dispatch({
      type: types.SHOW_ALL_TAB,
    });
  },

  showSubTab() {
    store.dispatch({
      type: types.SHOW_SUB_TAB,
    });
  },

  showGridView() {
    store.dispatch({
      type: types.SHOW_GRID_VIEW,
    });
  },

  showListView() {
    store.dispatch({
      type: types.SHOW_LIST_VIEW,
    });
  },

  movePrevPage() {
    store.dispatch({
      type: types.MOVE_PREV_PAGE,
    });
  },

  moveNextPage() {
    store.dispatch({
      type: types.MOVE_NEXT_PAGE,
    });
  },
};
