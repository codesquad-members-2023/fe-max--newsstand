import { getGridImgs } from './utils/dataFetch';
import NewsStand from './components/NewsStand';
import './styles/main.css';

const state = {
  dateInfo: new Date(),
  gridImgs: getGridImgs(),
  gridPage: 0,
  hoverOnGrid: false,
  hoveredCellIndex: -1
};

export const invoke = (action: Action) => {
  switch (action.type) {
    case 'moveToNextGridPage':
      state.gridPage = state.gridPage + 1;
      break;
    case 'moveToPrevGridPage':
      state.gridPage = state.gridPage - 1;
      break;
    case 'turnOnSubscriptionCover':
      state.hoverOnGrid = action.payload.hoverOnGrid;
      state.hoveredCellIndex = action.payload.hoveredCellIndex;
      break;
  }

  onChangeState();
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: {
    imgs: state.gridImgs,
    page: state.gridPage,
    isHover: state.hoverOnGrid,
    hoverIndex: state.hoveredCellIndex
  },
});

app.append(newsStand.element);

const onChangeState = () => {
  newsStand.updateProps({
    dateInfo: state.dateInfo,
    gridInfo: {
      imgs: state.gridImgs,
      page: state.gridPage,
      isHover: state.hoverOnGrid,
      hoverIndex: state.hoveredCellIndex
    }
  });
};
