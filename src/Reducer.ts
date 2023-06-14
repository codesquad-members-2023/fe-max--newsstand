import {
  Action,
  ListDataType,
  RollerType,
  newsStandState,
} from "./utils/types";

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
      case "UPDATE_PAGE":
        return this.updatePage(state, action.page);
      case "SELECT_ALL_CONTENT":
      case "SELECT_SUB_CONTENT":
        return this.changeCurrentType(state);
      case "SELECT_GRID_TAB":
      case "SELECT_LIST_TAB": {
        const newState = this.toggleCurrentContent(state);

        return this.changeCurrentList(newState);
      }
      case "UPDATE_SUBSCRIBE":
        return this.updateSubscribe(state, action.subscribedPress);
      case "INCREMENT_INDEX":
        return this.changeIndex(state, 1);
      case "DECREMENT_INDEX":
        return this.changeIndex(state, -1);
      default:
        return state;
    }
  }

  private updatePage(state: newsStandState, page: number) {
    const newState = this.deepCopy(state);
    newState.currentPage = page;
    newState.list.currentViewIndex = 0;

    return this.getUpdatedListData(newState);
  }

  private changeIndex(state: newsStandState, direction: number) {
    const newState = this.deepCopy(state);
    const list = newState.list;
    const currentPage = newState.currentPage;

    list.currentViewIndex += direction;
    if (list.currentViewIndex === list.currentViewList.pressList.length) {
      if (currentPage === list.currentTypeList.length - 1) {
        list.currentViewIndex = 0;
        newState.currentPage = 0;
      } else {
        list.currentViewIndex = 0;
        newState.currentPage += 1;
      }
    } else {
      if (newState.currentPage === 0 && list.currentViewIndex === -1) {
        newState.currentPage = list.currentTypeList.length - 1;
        list.currentViewIndex =
          list.currentTypeList[newState.currentPage].pressList.length - 1;
      } else if (list.currentViewIndex === -1) {
        newState.currentPage =
          newState.currentPage > list.currentTypeList.length
            ? 0
            : newState.currentPage - 1;

        newState.list.currentViewIndex =
          newState.list.currentTypeList[newState.currentPage].pressList.length -
          1;
      }
    }

    return this.getUpdatedListData(newState);
  }

  private toggleCurrentContent(state: newsStandState) {
    const newState = this.deepCopy(state);
    newState.currentPage = 0;
    newState.list.currentViewIndex = 0;

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

    if (newState.currentContent === "grid") {
      return this.getUpdatedGridData(newState);
    } else {
      return this.getUpdatedListData(newState);
    }
  }

  private changePage(state: newsStandState, direction: number): newsStandState {
    const newState = this.deepCopy(state);
    newState.currentPage += direction;

    return this.getUpdatedGridData(newState);
  }

  private changeCurrentType(state: newsStandState) {
    const newState = this.deepCopy(state);
    newState.currentPage = 0;

    if (newState.currentType === "all") {
      newState.currentType = "sub";
    } else {
      newState.currentType = "all";
    }

    return this.changeCurrentList(newState);
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
    } else {
      const subList = newState.grid.gridAllList.filter((grid) =>
        newState.subscribedPress.includes(grid.alt)
      );

      newState.grid.currentTypeList = subList;
      newState.grid.currentViewList = subList.slice(startIndex, endIndex);
    }

    return newState;
  }

  private getUpdatedListData(state: newsStandState) {
    const newState = this.deepCopy(state);

    if (newState.currentType === "all") {
      return this.updateAllList(newState);
    } else {
      return this.updateSubList(newState);
    }
  }

  private updateAllList(state: newsStandState) {
    const list = state.list;
    const currentPage = state.currentPage;

    state.list.currentTypeList = list.listAllList;
    state.list.currentViewList = list.listAllList[currentPage];

    if (state.currentPage === list.listAllList.length) {
      state.currentPage = 0;
      list.currentViewIndex = 0;
    }

    state.list.currentViewList = state.list.listAllList[state.currentPage];

    return state;
  }

  private updateSubList(state: newsStandState) {
    const listData = state.list.listAllList
      .map((data) => this.filterSubscribedPress(state, data))
      .flat();

    state.list.currentViewIndex = 0;
    state.list.currentTypeList = listData;
    state.list.currentViewList = listData[state.currentPage];

    return state;
  }

  private filterSubscribedPress(state: newsStandState, data: ListDataType) {
    return data.pressList
      .filter((pressData) =>
        state.subscribedPress.includes(pressData.pressLogoAlt)
      )
      .map((pressData) => ({
        title: pressData.pressLogoAlt,
        pressList: [pressData],
      }));
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

