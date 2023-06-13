import { getNewsList, getSubscribedMedias, setSubscribedMedias } from './utils/dataUtils';
import { GRID_PAGE_LIMIT } from './constants';
import { onChangeState } from './main';

const state: {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscribedMedias: string[];
  targetMedia: 'total' | 'subscribed';
  viewer: 'gridView' | 'listView';
  news: NewsData | null;
  fields: FieldData[];
  listIndex: number;
  arrowInfo: {
    left: boolean;
    right: boolean;
  };
} = {
  dateInfo: new Date(),
  gridInfo: {
    imgs: [],
    page: 0,
    isHover: false,
    hoverIndex: -1
  },
  subscribedMedias: getSubscribedMedias(),
  targetMedia: 'total',
  viewer: 'gridView',
  news: null,
  fields: [],
  listIndex: 0,
  arrowInfo: {
    left: true,
    right: true
  }
};

export const getState = () => {
  return state;
};

export const invoke = (action: Action) => {
  switch (action.type) {
    case 'turnOnSubscriptionCover':
      state.gridInfo.isHover = action.payload.hoverOnGrid;
      state.gridInfo.hoverIndex = action.payload.hoveredCellIndex;

      break;
    case 'turnOffSubscriptionCover':
      state.gridInfo.isHover = action.payload.hoverOnGrid;
      state.gridInfo.hoverIndex = -1;

      break;
    case 'initGridImages':
      state.gridInfo.imgs = action.payload.images;

      changeArrowStates();
      break;
    case 'updateSubscribedMedia':
      if (action.payload.mode === 'add') {
        state.subscribedMedias.push(action.payload.name);
      } else {
        state.subscribedMedias = state.subscribedMedias.filter(
          (name) => name !== action.payload.name
        );
      }

      setSubscribedMedias(state.subscribedMedias);
      state.subscribedMedias = getSubscribedMedias();
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
      if (state.viewer === 'gridView') {
        decreaseGridPage();
        changeArrowStates();
      } else {
        decreaseListIndex();
        fetchNewsData(state.listIndex);
      }

      break;
    case 'onClickRightArrow':
      if (state.viewer === 'gridView') {
        increaseGridPage();
        changeArrowStates();
      } else {
        increaseListIndex();
        fetchNewsData(state.listIndex);
      }

      break;
    case 'changeViewer':
      state.viewer = action.payload.viewer;

      resetViewerStates();
      changeArrowStates();
      break;
  }

  onChangeState();
};

const increaseGridPage = () => {
  state.gridInfo.page = (state.gridInfo.page + 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
};

const decreaseGridPage = () => {
  state.gridInfo.page = (state.gridInfo.page - 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
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
  if (state.viewer === 'listView') {
    state.arrowInfo.left = true;
    state.arrowInfo.right = true;
    return;
  }
  state.arrowInfo.left = state.gridInfo.page !== 0;
  state.arrowInfo.right = state.gridInfo.page !== 3;
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
  state.gridInfo = {
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
