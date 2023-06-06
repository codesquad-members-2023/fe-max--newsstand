import { State, Action } from './common/types';

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREASE_TICK':
      return { ...state, rollerTick: state.rollerTick + 1 };
    case 'GO_TO_NEXT':
      return { ...state, curPage: state.curPage + 1 };
    case 'GO_TO_PREV':
      return { ...state, curPage: state.curPage - 1 };
    default:
      return state;
  }
}
