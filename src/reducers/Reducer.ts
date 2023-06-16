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

    // case 'STOP_ROLLING': {
    //   if (action.position === 'left') {
    //     return produce(state, (draftState) => {
    //       draftState.leftRoller.isRolling = false;
    //       return draftState;
    //     });
    //   }

    //   if (action.position === 'right') {
    //     return produce(state, (draftState) => {
    //       draftState.rightRoller.isRolling = false;
    //       return draftState;
    //     });
    //   }

    //   break;
    // }

    // case 'START_ROLLING': {
    //   if (action.position === 'left') {
    //     return produce(state, (draftState) => {
    //       draftState.leftRoller.isRolling = true;
    //       return draftState;
    //     });
    //   }

    //   if (action.position === 'right') {
    //     return produce(state, (draftState) => {
    //       draftState.rightRoller.isRolling = true;
    //       return draftState;
    //     });
    //   }

    //   break;
    // }

    default:
      return state;
  }
}
