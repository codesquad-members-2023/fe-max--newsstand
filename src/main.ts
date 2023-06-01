import NewsStand from './components/NewsStand';
import { getGridImgs, getHeadlineNews } from './utils/dataUtils';
import { shuffleArray } from './utils/randomUtils';
import './styles/main.css';

const state: {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscribedMediaIds: number[];
  headlineInfo: HeadlineInfo;
  targetMedia: 'total' | 'subscribed';
  viewerState: 'listView' | 'gridView';
} = {
  dateInfo: new Date(),
  gridInfo: {
    imgs: [],
    page: 0,
    isHover: false,
    hoverIndex: -1
  },
  subscribedMediaIds: [56],
  headlineInfo: {
    news: [],
    leftIndex: 0,
    rightIndex: 1
  },
  targetMedia: 'total',
  viewerState: 'gridView'
};

const initGridImgs = async () => {
  invoke({
    type: 'initGridImages',
    payload: {
      images: shuffleArray(await getGridImgs())
    }
  });
};

const initHeadlineNews = async () => {
  invoke({
    type: 'initHeadlineNews',
    payload: {
      news: await getHeadlineNews()
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
    case 'initHeadlineNews':
      state.headlineInfo.news = action.payload.news;
      break;
    case 'headlineRollerTick':
      state.headlineInfo.leftIndex = state.headlineInfo.leftIndex + 2;
      state.headlineInfo.rightIndex = state.headlineInfo.rightIndex + 2;
      break;
  }

  onChangeState();
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: state.gridInfo,
  subscriptionInfo: state.subscribedMediaIds,
  headlineInfo: state.headlineInfo,
  mainViewerInfo: {
    targetMedia: state.targetMedia,
    viewerState: state.viewerState
  }
});

app.append(newsStand.element);
initGridImgs();
initHeadlineNews();

const onChangeState = () => {
  newsStand.updateView({
    dateInfo: state.dateInfo,
    gridInfo: state.gridInfo,
    subscriptionInfo: state.subscribedMediaIds,
    headlineInfo: state.headlineInfo,
    mainViewerInfo: {
      targetMedia: state.targetMedia,
      viewerState: state.viewerState
    }
  });
};
