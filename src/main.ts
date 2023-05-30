import NewsStand from './components/NewsStand';
import { getGridImgs } from './utils/dataFetch';
import { shuffleArray } from './utils/randomUtils';
import './styles/main.css';

const state: {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscribedMediaIds: number[];
} = {
  dateInfo: new Date(),
  gridInfo: {
    imgs: [],
    page: 0,
    isHover: false,
    hoverIndex: -1
  },
  subscribedMediaIds: [56]
};

const initGridImgs = async () => {
  const images = shuffleArray(await getGridImgs());
  invoke({
    type: 'initGridImages',
    payload: {
      images: images
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
  }

  onChangeState();
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: state.gridInfo,
  subscriptionInfo: state.subscribedMediaIds
});

app.append(newsStand.element);
initGridImgs();

const onChangeState = () => {
  newsStand.updateProps({
    dateInfo: state.dateInfo,
    gridInfo: state.gridInfo,
    subscriptionInfo: state.subscribedMediaIds
  });
};
