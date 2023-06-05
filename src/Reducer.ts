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
      case "UPDATE_SUBSCRIBE":
        return this.updateSubscribe(state, action.subscribedPress);

      default:
        return state;
    }
  }

  private updateSubscribe(state: newsStandState, subscribedPress: string[]) {
    const newState = this.deepCopy(state);
    newState.subscribedPress = subscribedPress;

    return this.changeCurrentList(newState);
  }

  private changeCurrentList(state: newsStandState) {
    const newState = this.deepCopy(state);

    newState.currentPage = 0;

    return this.getUpdatedGridList(newState);
  }

  private changePage(state: newsStandState, direction: number): newsStandState {
    const newState = this.deepCopy(state);
    newState.currentPage += direction;

    if (newState.currentContent === "grid") {
      return this.getUpdatedGridList(newState);
    }

    return newState;
  }

  private changeCurrentType(state: newsStandState) {
    const newState = this.deepCopy(state);
    newState.currentPage = 0;

    if (newState.currentType === "all") {
      newState.currentType = "sub";
    } else {
      newState.currentType = "all";
    }

    return newState;
  }

  private getUpdatedGridList(state: newsStandState) {
    const newState = this.deepCopy(state);
    const currentPage = newState.currentPage;
    const startIndex = currentPage * this.ITEM_PER_PAGE;
    const endIndex = startIndex + this.ITEM_PER_PAGE;

    if (newState.currentType === "all") {
      newState.grid.currentTypeList = newState.grid.gridAllList;
      newState.grid.currentViewList = newState.grid.gridAllList.slice(
        startIndex,
        endIndex
      );

      return newState;
    }

    const subList = newState.grid.gridAllList.filter((grid) =>
      newState.subscribedPress.includes(grid.alt)
    );

    newState.grid.currentTypeList = subList;
    newState.grid.currentViewList = subList.slice(startIndex, endIndex);

    return newState;
  }

  private incrementTick(state: newsStandState): newsStandState {
    const newState = this.deepCopy(state);
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
    const newState = this.deepCopy(state);
    const targetRoller = action.target;
    const roller = newState[`${targetRoller}Roller`];
    roller.isMove = !roller.isMove;

    return newState;
  }

  private deepCopy(state: newsStandState): newsStandState {
    return JSON.parse(JSON.stringify(state));
  }
}
