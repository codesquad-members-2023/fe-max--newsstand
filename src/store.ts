import { getNewsList, getSubscribedMedias, setSubscribedMedias } from '@utils/dataUtils';
import { GRID_PAGE_LIMIT } from '@/constants';

type State = {
  dateInfo: Date;
  gridViewInfo: GridViewInfo;
  subscriptionInfo: string[];
  mainViewerInfo: MainViewerInfo;
  news: NewsData | null;
  fields: FieldData[];
  listIndex: number;
  arrowInfo: {
    left: boolean;
    right: boolean;
  };
}

const state: State = {
  dateInfo: new Date(),
  gridViewInfo: {
    imgs: [],
    page: 0,
    isHover: false,
    hoverIndex: -1
  },
  subscriptionInfo: getSubscribedMedias(),
  mainViewerInfo: {
    targetMedia: 'total',
    viewer: 'gridView',
  },
  news: null,
  fields: [],
  listIndex: 0,
  arrowInfo: {
    left: true,
    right: true
  }
};

export const getState = () => {
  return { ...state };
};

export const invoke = (action: Action) => {
  switch (action.type) {
    case 'turnOnSubscriptionCover':
      state.gridViewInfo.isHover = action.payload.hoverOnGrid;
      state.gridViewInfo.hoverIndex = action.payload.hoveredCellIndex;

      break;
    case 'turnOffSubscriptionCover':
      state.gridViewInfo.isHover = action.payload.hoverOnGrid;
      state.gridViewInfo.hoverIndex = -1;

      break;
    case 'initGridImages':
      state.gridViewInfo.imgs = action.payload.images;

      changeArrowStates();
      break;
    case 'updateSubscribedMedia':
      if (action.payload.mode === 'add') {
        state.subscriptionInfo.push(action.payload.name);
      } else {
        state.subscriptionInfo = state.subscriptionInfo.filter(
          (name) => name !== action.payload.name
        );
      }

      setSubscribedMedias(state.subscriptionInfo);
      state.subscriptionInfo = getSubscribedMedias();
      break;
    case 'initNewsData':
      const news = action.payload.news;
      if (!news) {
        return;
      }

      state.news = news;
      state.fields.forEach((field) => {
        field.active = field.name === news.category;
      });
      state.listIndex = Number(news.index);

      changeArrowStates();
      break;
    case 'initFieldData':
      const fields = action.payload.fields;

      state.fields = fields.map((field) => {
        return {
          name: field,
          active: field === state.news?.category
        };
      });

      break;
    case 'onClickLeftArrow':
      if (state.mainViewerInfo.viewer === 'gridView') {
        decreaseGridPage();
        changeArrowStates();
      } else {
        decreaseListIndex();
        fetchNewsData(state.listIndex);
      }

      break;
    case 'onClickRightArrow':
      if (state.mainViewerInfo.viewer === 'gridView') {
        increaseGridPage();
        changeArrowStates();
      } else {
        increaseListIndex();
        fetchNewsData(state.listIndex);
      }

      break;
    case 'changeViewer':
      state.mainViewerInfo.viewer = action.payload.viewer;

      resetViewerStates();
      changeArrowStates();
      break;
  }

  return {...state};
  // onChangeState();
};

const increaseGridPage = () => {
  state.gridViewInfo.page = (state.gridViewInfo.page + 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
};

const decreaseGridPage = () => {
  state.gridViewInfo.page = (state.gridViewInfo.page - 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
};

const increaseListIndex = () => {
  const totalCount = state.news?.totalCount!;
  state.listIndex = (state.listIndex + 1 + totalCount) % totalCount;
};

const decreaseListIndex = () => {
  const totalCount = state.news?.totalCount!;
  state.listIndex = (state.listIndex - 1 + totalCount) % totalCount;
};

const changeArrowStates = () => {
  if (state.mainViewerInfo.viewer === 'listView') {
    state.arrowInfo.left = true;
    state.arrowInfo.right = true;
    return;
  }
  state.arrowInfo.left = state.gridViewInfo.page !== 0;
  state.arrowInfo.right = state.gridViewInfo.page !== 3;
};

export const fetchNewsData = async (index: number = 0, category: string = '') => {
  invoke({
    type: 'initNewsData',
    payload: {
      news: await getNewsList(index, category)
    }
  });
};

export const resetViewerStates = () => {
  resetGridViewStates();
  resetListViewStates();
};

export const resetGridViewStates = () => {
  state.gridViewInfo = {
    imgs: [],
    page: 0,
    isHover: false,
    hoverIndex: -1
  };
};

export const resetListViewStates = () => {
  state.fields = [];
  state.listIndex = 0;
  state.news = null;
};
