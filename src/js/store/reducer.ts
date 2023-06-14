import { State, Action } from '../type';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_GRID_VIEW':
      return { ...state, pageIndex: 0, isGrid: true };
    case 'SET_LIST_VIEW':
      return { ...state, pageIndex: 0, isGrid: false };
    case 'SELECT_ALL_PRESS':
      return { ...state, isAllPress: true };
    case 'SELECT_SUBSCRIBE_PRESS':
      return { ...state, isAllPress: false };
    case 'NEXT_GRID_PAGE':
      return { ...state, pageIndex: state.pageIndex + 1 };
    case 'PREV_GRID_PAGE':
      return { ...state, pageIndex: state.pageIndex - 1 };
    default:
      return state;
  }
}
