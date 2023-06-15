import * as types from './ActionTypes';
import { store } from '..';

export const Actions = {
  roll(position: string) {
    store.dispatch({
      type: types.ROLL,
      position: position,
    });
  },
};
