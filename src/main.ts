import NewsStand from './components/NewsStand';
import { getGridImgs } from './utils/dataFetch';
import { shuffleArray } from './utils/randomUtils';
import './styles/main.css';

const state = {
  dateInfo: new Date(),
  gridInfo: {
    imgs: shuffleArray(getGridImgs()),
    page: 0,
    isHover: false,
    hoverIndex: -1
  },
  subscribedMediaIds: [56]
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
  }

  onChangeState();
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: state.gridInfo
});

app.append(newsStand.element);

const onChangeState = () => {
  newsStand.updateProps({
    dateInfo: state.dateInfo,
    gridInfo: state.gridInfo,
    subscriptionInfo: state.subscribedMediaIds
  });
};
