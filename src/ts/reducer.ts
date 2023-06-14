import { GRID, LIST } from './common/constant';
import { State, Action } from './common/types';

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREASE_TICK':
      return increaseTick(state);
    case 'GO_TO_NEXT_GRID':
      return goToNextGrid(state);
    case 'GO_TO_PREV_GRID':
      return goToPrevGrid(state);
    case 'GO_TO_NEXT_LIST':
      return goToNextList(state);
    case 'GO_TO_PREV_LIST':
      return goToPrevList(state);
    case 'CLICK_CATEGORY':
      return clickCategory(state, action);
    // case 'VIEW_ALL':
    //   return;
    // case 'VIEW_SUBS':
    //   return;
    case 'MODE_GRID':
      return changeToGrid(state);
    case 'MODE_LIST':
      return changeToList(state);
    default:
      return state;
  }
}

function goToNextGrid(state: State) {
  return {
    ...state,
    grid: {
      allGrid: state.grid.allGrid,
      curPage: state.grid.curPage + 1,
      lastPage: state.grid.lastPage,
    },
  };
}

function goToPrevGrid(state: State) {
  return {
    ...state,
    grid: {
      allGrid: state.grid.allGrid,
      curPage: state.grid.curPage - 1,
      lastPage: state.grid.lastPage,
    },
  };
}

function increaseTick(state: State) {
  return {
    ...state,
    roller: {
      leftRollingList: state.roller.leftRollingList,
      rightRollingList: state.roller.rightRollingList,
      rollerTick: state.roller.rollerTick + 1,
    },
  };
}

function goToNextList(state: State) {
  const maxItem = state.list.curCategoryList[0].pressList.length - 1;
  const isLastCategory = state.list.categoryIndex === state.list.allList.length - 1;
  const isLastItem = state.list.curCategoryIndex === maxItem;

  if (isLastItem && isLastCategory) {
    return {
      ...state,
      list: {
        allList: state.list.allList,
        categoryIndex: 0,
        curCategoryList: [state.list.allList[0]],
        curCategoryIndex: 0,
      },
    };
  } else if (isLastItem && !isLastCategory) {
    return {
      ...state,
      list: {
        allList: state.list.allList,
        categoryIndex: state.list.categoryIndex + 1,
        curCategoryList: [state.list.allList[state.list.categoryIndex + 1]],
        curCategoryIndex: 0,
      },
    };
  } else {
    return {
      ...state,
      list: {
        allList: state.list.allList,
        categoryIndex: state.list.categoryIndex,
        curCategoryList: state.list.curCategoryList,
        curCategoryIndex: state.list.curCategoryIndex + 1,
      },
    };
  }
}

function goToPrevList(state: State) {
  const isFirstCategory = state.list.categoryIndex === 0;
  const isFirstItem = state.list.curCategoryIndex === 0;
  const lastCategoryIndex = state.list.allList.length - 1;
  const prevCategoryIndex = isFirstCategory
    ? state.list.allList[lastCategoryIndex].pressList.length - 1
    : state.list.allList[state.list.categoryIndex - 1].pressList.length - 1;

  if (isFirstItem && isFirstCategory) {
    return {
      ...state,
      list: {
        allList: state.list.allList,
        categoryIndex: lastCategoryIndex,
        curCategoryList: [state.list.allList[state.list.allList.length - 1]],
        curCategoryIndex: prevCategoryIndex,
      },
    };
  } else if (isFirstItem && !isFirstCategory) {
    return {
      ...state,
      list: {
        allList: state.list.allList,
        categoryIndex: state.list.categoryIndex - 1,
        curCategoryList: [state.list.allList[state.list.categoryIndex - 1]],
        curCategoryIndex: prevCategoryIndex,
      },
    };
  } else {
    return {
      ...state,
      list: {
        allList: state.list.allList,
        categoryIndex: state.list.categoryIndex,
        curCategoryList: state.list.curCategoryList,
        curCategoryIndex: state.list.curCategoryIndex - 1,
      },
    };
  }
}

function clickCategory(state: State, action: Action) {
  let targetIndex = 0;

  while (action.payload !== state.list.allList[targetIndex].title) {
    targetIndex++;
  }

  return {
    ...state,
    list: {
      allList: state.list.allList,
      categoryIndex: targetIndex,
      curCategoryList: [state.list.allList[targetIndex]],
      curCategoryIndex: 0,
    },
  };
}

function changeToGrid(state: State) {
  return {
    ...state,
    grid: {
      allGrid: state.grid.allGrid,
      curPage: GRID.FIRST_PAGE,
      lastPage: state.grid.lastPage,
    },
    list: {
      allList: state.list.allList,
      categoryIndex: LIST.FIRST_CATEGORY_INDEX,
      curCategoryList: [state.list.allList[0]],
      curCategoryIndex: LIST.FIRST_CUR_INDEX,
    },
    viewMode: {
      view: state.viewMode.view,
      mode: 'grid',
      viewMode: 'allGrid',
    },
  };
}

function changeToList(state: State) {
  return {
    ...state,
    grid: {
      allGrid: state.grid.allGrid,
      curPage: GRID.FIRST_PAGE,
      lastPage: state.grid.lastPage,
    },
    list: {
      allList: state.list.allList,
      categoryIndex: LIST.FIRST_CATEGORY_INDEX,
      curCategoryList: [state.list.allList[0]],
      curCategoryIndex: LIST.FIRST_CUR_INDEX,
    },
    viewMode: {
      view: state.viewMode.view,
      mode: 'list',
      viewMode: 'allList',
    },
  };
}
