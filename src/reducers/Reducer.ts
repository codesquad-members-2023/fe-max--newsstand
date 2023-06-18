import { State, Action } from '../utils/types';
import { produce } from 'immer';

export function reducer(state: State | undefined, action: Action) {
  switch (action.type) {
    case 'ROLLING': {
      if (action.position === 'left') {
        return produce(state, (draftState) => {
          draftState.leftRoller.nextTitleIdx += 1;
          draftState.leftRoller.nextTitleIdx %= 5;

          return draftState;
        });
      }

      if (action.position === 'right') {
        return produce(state, (draftState) => {
          draftState.rightRoller.nextTitleIdx += 1;
          draftState.rightRoller.nextTitleIdx %= 5;
          return draftState;
        });
      }

      break;
    }

    case 'SHOW_ALL_TAB': {
      return produce(state, (draftState) => {
        draftState.viewTab = 'All';
        return draftState;
      });
    }

    case 'SHOW_SUB_TAB': {
      return produce(state, (draftState) => {
        draftState.viewTab = 'Sub';
        return draftState;
      });
    }

    case 'SHOW_GRID_VIEW': {
      return produce(state, (draftState) => {
        draftState.viewType = 'Grid';
        return draftState;
      });
    }

    case 'SHOW_LIST_VIEW': {
      return produce(state, (draftState) => {
        draftState.viewType = 'List';
        return draftState;
      });
    }

    case 'MOVE_PREV_PAGE': {
      return produce(state, (draftState) => {
        draftState.currentPageIdx -= 1;
        return draftState;
      });
    }

    case 'MOVE_NEXT_PAGE': {
      return produce(state, (draftState) => {
        draftState.currentPageIdx += 1;

        return draftState;
      });
    }

    default:
      return state;
  }
}
