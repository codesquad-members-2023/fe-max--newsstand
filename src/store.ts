import { getSubscribedIds, setSubscribedIds } from './utils/dataUtils';
import { GRID_PAGE_LIMIT } from './constants';
import { onChangeState } from './main';

const state: {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscribedMediaIds: number[];
  targetMedia: 'total' | 'subscribed';
  viewer: 'gridView' | 'listView';
  news: NewsData | null;
  fields: FieldData[];
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
  subscribedMediaIds: getSubscribedIds(),
  targetMedia: 'total',
  viewer: 'listView',
  news: null,
  fields: [],
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
    case 'moveToNextGridPage':
      break;
    case 'moveToPrevGridPage':
      break;
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
        state.subscribedMediaIds.push(action.payload.id);
      } else {
        state.subscribedMediaIds = state.subscribedMediaIds.filter(
          (id) => id !== action.payload.id
        );
      }
      setSubscribedIds(state.subscribedMediaIds);
      state.subscribedMediaIds = getSubscribedIds();
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
      }
      break;
    case 'onClickRightArrow':
      if (state.viewer === 'gridView') {
        increaseGridPage();
      }
      break;
  }

  onChangeState();
};

const increaseGridPage = () => {
  state.gridInfo.page = (state.gridInfo.page + 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
  changeArrowStates();
};

const decreaseGridPage = () => {
  state.gridInfo.page = (state.gridInfo.page - 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
  changeArrowStates();
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
