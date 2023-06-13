import { getNewsList, getSubscribedIds, setSubscribedIds } from './utils/dataUtils';
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
  subscribedMediaIds: getSubscribedIds(),
  targetMedia: 'total',
  viewer: 'listView',
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
      } else {
        decreaseListIndex();
        fetchNewsData(state.listIndex);
      }
      changeArrowStates();
      break;
    case 'onClickRightArrow':
      if (state.viewer === 'gridView') {
        increaseGridPage();
      } else {
        increaseListIndex();
        fetchNewsData(state.listIndex);
      }
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
  changeArrowStates();
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
