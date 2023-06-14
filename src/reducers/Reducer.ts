import { produce } from 'immer';
import { State, Action } from '../utils/types';

export default function newsReducer(state: State | undefined, action: Action) {
  switch (action.type) {
    case 'Move_Next_Page':
      return produce(state, (draft) => {
        draft.currentPage += 1;
      });

    case 'Move_Prev_Page':
      return {
        ...state,
        currentPage: (state.currentPage -= 1),
      };

    default:
      return state;
  }
}
