import NewsStand from './components/NewsStand';
import { getGridImgs, getSubscribedIds, setSubscribedIds } from './utils/dataUtils';
import { shuffleArray } from './utils/randomUtils';
import './styles/main.css';

const state: {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscribedMediaIds: number[];
  targetMedia: 'total' | 'subscribed';
  viewerState: 'listView' | 'gridView';
  news: NewsData | null
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
  viewerState: 'gridView',
  news: null
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
      state.gridInfo.page = state.gridInfo.page + 1;
      break;
    case 'moveToPrevGridPage':
      state.gridInfo.page = state.gridInfo.page - 1;
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
      break;
  }

  onChangeState();
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: state.gridInfo,
  subscriptionInfo: state.subscribedMediaIds,
  mainViewerInfo: {
    targetMedia: state.targetMedia,
    viewerState: state.viewerState
  },
  news: state.news
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
      viewerState: state.viewerState
    },
    news: state.news
  });
};
