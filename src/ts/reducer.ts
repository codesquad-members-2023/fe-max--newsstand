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

// import { VIEW, MODE } from './common/constant';

// case 'VIEW_ALL':
//   return { ...state, view: VIEW.ALL };
// case 'VIEW_SUBS':
//   return { ...state, view: VIEW.SUBS };
// case 'MODE_LIST':
//   return { ...state, mode: MODE.LIST };
// case 'MODE_GRID':
//   return { ...state, mode: MODE.GRID };
// case 'ALL_LIST':
//   return { ...state, viewMode: 'ALL_LIST' };
// case 'ALL_GRID':
//   return { ...state, viewMode: 'ALL_GRID' };
// case 'SUBS_LIST':
//   return { ...state, viewMode: 'SUBS_LIST' };
// case 'SUBS_GRID':
//   return { ...state, viewMode: 'SUBS_GRID' };
