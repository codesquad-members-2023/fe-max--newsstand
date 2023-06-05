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
      case "SELECT_ALL_CONTENT": {
        const newState = this.changeCurrentType(state);

        return this.changeCurrentList(newState);
      }
      case "SELECT_SUB_CONTENT": {
        const newState = this.changeCurrentType(state);

        return this.changeCurrentList(newState);
      }
      default:
        return state;
    }
  }

  private changeCurrentList(state: newsStandState) {
    const newState = { ...state };

    newState.currentPage = 0;
    newState.grid.currentViewList = this.getUpdatedGridList(newState);

    return newState;
  }

  private changePage(state: newsStandState, direction: number): newsStandState {
    const newState = { ...state };
    newState.currentPage += direction;

    if (newState.currentContent === "grid") {
      newState.grid.currentViewList = this.getUpdatedGridList(newState);
    }

    return newState;
  }

  private changeCurrentType(state: newsStandState) {
    const newState = { ...state };
    newState.currentPage = 0;

    if (newState.currentType === "all") {
      newState.currentType = "sub";
    } else {
      newState.currentType = "all";
    }

    return newState;
  }

  private getUpdatedGridList(state: newsStandState): any[] {
    const newState = { ...state };
    const currentPage = newState.currentPage;
    const startIndex = currentPage * this.ITEM_PER_PAGE;
    const endIndex = startIndex + this.ITEM_PER_PAGE;

    if (newState.currentType === "all") {
      newState.grid.currentTypeList = newState.grid.gridAllList;
      return newState.grid.gridAllList.slice(startIndex, endIndex);
    }

    const subList = newState.grid.gridAllList.filter((grid) =>
      newState.subscribedPress.includes(grid.alt)
    );
    newState.grid.currentTypeList = subList;

    return subList.slice(startIndex, endIndex);
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

