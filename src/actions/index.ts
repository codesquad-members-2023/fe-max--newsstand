import * as types from './ActionTypes';
import { store } from '..';

export const Actions = {
  roll(position: string) {
    store.dispatch({
      type: types.ROLLING,
      position: position,
    });
  },

  stopRolling(position: string) {
    store.dispatch({
      type: types.STOP_ROLLING,
      position: position,
    });
  },

  startRolling(position: string) {
    store.dispatch({
      type: types.START_ROLLING,
      position: position,
    });
  },
};
