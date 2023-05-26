import { getGridImgs } from './utils/dataFetch';
import NewsStand from './components/NewsStand';
import './styles/main.css';

const state = {
  dateInfo: new Date(),
  gridImgs: getGridImgs(),
  gridPage: 0
};

type Action = {
  type: string;
};

export const invoke = (action: Action) => {
  switch (action.type) {
    case 'moveToNextGridPage':
      state.gridPage = state.gridPage + 1;
      break;
    case 'moveToPrevGridPage':
      state.gridPage = state.gridPage - 1;
      break;
  }

  onChangeState();
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: {
    imgs: state.gridImgs,
    page: state.gridPage
  }
});

app.append(newsStand.element);

const onChangeState = () => {
  newsStand.updateProps({
    dateInfo: state.dateInfo,
    gridInfo: {
      imgs: state.gridImgs,
      page: state.gridPage
    }
  });
};
