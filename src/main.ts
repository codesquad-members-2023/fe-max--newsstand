import NewsStand from './components/NewsStand';
import { getGridImgs, getSubscribedIds, setSubscribedIds } from './utils/dataUtils';
import { shuffleArray } from './utils/commonUtils';
import './styles/main.css';
import { GRID_PAGE_LIMIT } from './constants';

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
  viewer: 'gridView',
  news: null,
  fields: [],
  arrowInfo: {
    left: true,
    right: true
  }
};

const initGridImgs = async () => {
  invoke({
    type: 'initGridImages',
    payload: {
      images: shuffleArray(await getGridImgs())
    }
  });
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
        increaseGridPage()
      }
      break;
  }

  onChangeState();
};

const increaseGridPage = () => {
  state.gridInfo.page = (state.gridInfo.page + 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
  changeArrowStates();
}

const decreaseGridPage = () => {
  state.gridInfo.page = (state.gridInfo.page - 1 + GRID_PAGE_LIMIT) % GRID_PAGE_LIMIT;
  changeArrowStates();
}

const changeArrowStates = () => {
  if (state.viewer === 'listView') {
    state.arrowInfo.left = true;
    state.arrowInfo.right = true;
    return;
  }
  state.arrowInfo.left = state.gridInfo.page !== 0;
  state.arrowInfo.right = state.gridInfo.page !== 3;
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: state.gridInfo,
  subscriptionInfo: state.subscribedMediaIds,
  mainViewerInfo: {
    targetMedia: state.targetMedia,
    viewer: state.viewer
  },
  news: state.news,
  fields: state.fields,
  arrowInfo: state.arrowInfo
});

app.append(newsStand.element);
initGridImgs();

const onChangeState = () => {
  newsStand.updateView({
    dateInfo: state.dateInfo,
    gridInfo: state.gridInfo,
    subscriptionInfo: state.subscribedMediaIds,
    mainViewerInfo: {
      targetMedia: state.targetMedia,
      viewer: state.viewer
    },
    news: state.news,
    fields: state.fields,
    arrowInfo: state.arrowInfo
  });
};
