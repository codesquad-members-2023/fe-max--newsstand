import {
  Action,
  RollerType,
  ToggleRollingState,
  newsStandState,
} from "./utils/types";

export class Reducer {
  reduce(state: newsStandState, action: Action): newsStandState {
    switch (action.type) {
      case "INCREMENT_TICK":
        return this.incrementTick(state);
      case "TOGGLE_ROLLING_STATE":
        return this.toggleRollingState(state, action);
      default:
        return state;
    }
  }

  private incrementTick(state: newsStandState): newsStandState {
    const newState = { ...state };
    newState.rollerTick++;
    if (newState.rollerTick % 5 === 0) {
      if (!newState.leftRoller.isMove) {
        return newState;
      }
      newState.leftRoller = this.incrementRoller(newState.leftRoller);
    } else if (newState.rollerTick > 5 && newState.rollerTick % 5 === 1) {
      if (!newState.rightRoller.isMove) {
        return newState;
      }
      newState.rightRoller = this.incrementRoller(newState.rightRoller);
    }

    return newState;
  }

  private incrementRoller(rollerState: RollerType): RollerType {
    const newState = { ...rollerState };
    newState.index++;
    newState.index %= newState.headlineList.length;

    const nextIndex = (newState.index + 1) % newState.headlineList.length;

    newState.headline = [
      newState.headlineList[newState.index],
      newState.headlineList[nextIndex],
    ];

    return newState;
  }

  private toggleRollingState(
    state: newsStandState,
    action: ToggleRollingState
  ): newsStandState {
    const newState = { ...state };
    const targetRoller = action.target;
    newState[`${targetRoller}Roller`].isMove =
      !newState[`${targetRoller}Roller`].isMove;

    return newState;
  }
}

