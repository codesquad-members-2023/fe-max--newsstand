import { State, Action } from '../utils/types';
import { produce } from 'immer';

export default function newsReducer(state: State | undefined, action: Action) {
  switch (action.type) {
    case 'ROLL': {
      // deep copy state using immer to newState
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

    default:
      return state;
  }
}
