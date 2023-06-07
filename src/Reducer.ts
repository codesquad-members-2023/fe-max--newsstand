import { Action, RollerType, newsStandState } from "./utils/types";

export class Reducer {
  ITEM_PER_PAGE: number = 24;

  reduce(state: newsStandState, action: Action): newsStandState {
    switch (action.type) {
      case "INCREMENT_TICK":
        return this.incrementTick(state);
      case "TOGGLE_ROLLING_STATE":
        return this.toggleRollingState(state, action.target);
      case "INCREMENT_PAGE":
        return this.changePage(state, 1);
      case "DECREMENT_PAGE":
        return this.changePage(state, -1);
      case "SELECT_ALL_CONTENT":
      case "SELECT_SUB_CONTENT": {
        const newState = this.changeCurrentType(state);

        return this.changeCurrentList(newState);
      }
      case "SELECT_GRID_TAB":
      case "SELECT_LIST_TAB": {
        return this.toggleCurrentContent(state);
      }
      case "UPDATE_SUBSCRIBE":
        return this.updateSubscribe(state, action.subscribedPress);

      default:
        return state;
    }
  }

  private toggleCurrentContent(state: newsStandState) {
    const newState = this.deepCopy(state);
    newState.currentPage = 0;

    if (newState.currentContent === "grid") {
      newState.currentContent = "list";
    } else {
      newState.currentContent = "grid";
    }

    return newState;
  }

  private updateSubscribe(state: newsStandState, subscribedPress: string[]) {
    const newState = this.deepCopy(state);
    newState.subscribedPress = subscribedPress;

    return this.changeCurrentList(newState);
  }

  private changeCurrentList(state: newsStandState) {
    const newState = this.deepCopy(state);

    newState.currentPage = 0;

    return this.getUpdatedGridData(newState);
  }

  private changePage(state: newsStandState, direction: number): newsStandState {
    const newState = this.deepCopy(state);
    newState.currentPage += direction;

    if (newState.currentContent === "grid") {
      return this.getUpdatedGridData(newState);
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

  private getUpdatedGridData(state: newsStandState) {
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

    const isIncrementLeftRoller =
      newState.rollerTick % 5 === 0 && newState.leftRoller.isMove;
    const isIncrementRightRoller =
      newState.rollerTick % 5 === 1 &&
      newState.rightRoller.isMove &&
      newState.rollerTick > 5;

    if (isIncrementLeftRoller) {
      newState.leftRoller = this.incrementRoller(newState.leftRoller);
    } else if (isIncrementRightRoller) {
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
    target: "left" | "right"
  ): newsStandState {
    const newState = this.deepCopy(state);
    const roller = newState[`${target}Roller`];
    roller.isMove = !roller.isMove;

    return newState;
  }

  private deepCopy(state: newsStandState): newsStandState {
    return JSON.parse(JSON.stringify(state));
  }
}

