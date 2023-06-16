import * as types from './ActionTypes';
import { store } from '..';

export const Actions = {
  roll(position: string) {
    store.dispatch({
      type: types.ROLLING,
      position: position,
    });
  },

  movePrev() {
    store.dispatch({
      type: types.MOVE_TO_PREV,
    });
  },

  moveNext() {
    store.dispatch({
      type: types.MOVE_TO_NEXT,
    });
  },
};
