import { getGridImgs } from './utils/dataFetch';
import NewsStand from './components/NewsStand';
import './styles/main.css';

const state = {
  dateInfo: new Date(),
  gridImgs: getGridImgs(),
  gridPage: 0,
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
