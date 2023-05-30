import {
  Action,
  RollerType,
  ToggleRollingState,
  newsStandState,
} from "./utils/types";

export class Reducer {
  ITEM_PER_PAGE: number = 24;

  reduce(state: newsStandState, action: Action): newsStandState {
    switch (action.type) {
      case "INCREMENT_TICK":
        return this.incrementTick(state);
      case "TOGGLE_ROLLING_STATE":
        return this.toggleRollingState(state, action);
      case "INCREMENT_PAGE":
        return this.changePage(state, 1);
      case "DECREMENT_PAGE":
        return this.changePage(state, -1);
      default:
        return state;
    }
  }

  private changePage(state: newsStandState, direction: number): newsStandState {
    const newState = { ...state };
    newState.currentPage += direction;

    if (newState.currentMode === "grid") {
      newState.grid.currentGridList = this.getUpdatedGridList(newState);
    }

    return newState;
  }

  private getUpdatedGridList(state: newsStandState): any[] {
    const currentPage = state.currentPage;
    const startIndex = currentPage * this.ITEM_PER_PAGE;
    const endIndex = startIndex + this.ITEM_PER_PAGE;

    return state.grid.gridData.slice(startIndex, endIndex);
  }

  private incrementTick(state: newsStandState): newsStandState {
    const newState = { ...state };
    newState.rollerTick++;

    if (newState.rollerTick % 5 === 0 && newState.leftRoller.isMove) {
      newState.leftRoller = this.incrementRoller(newState.leftRoller);
    } else if (
      newState.rollerTick > 5 &&
      newState.rollerTick % 5 === 1 &&
      newState.rightRoller.isMove
    ) {
      newState.rightRoller = this.incrementRoller(newState.rightRoller);
    }

    return newState;
  }

  private incrementRoller(rollerState: RollerType): RollerType {
    const newState = { ...rollerState };
    newState.index = (newState.index + 1) % newState.headlineList.length;

    newState.headline = [
      newState.headlineList[newState.index],
      newState.headlineList[
        (newState.index + 1) % newState.headlineList.length
      ],
    ];

    return newState;
  }

  private toggleRollingState(
    state: newsStandState,
    action: ToggleRollingState
  ): newsStandState {
    const newState = { ...state };
    const targetRoller = action.target;
    const roller = newState[`${targetRoller}Roller`];
    roller.isMove = !roller.isMove;

    return newState;
  }
}

