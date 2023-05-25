import { getGridImgs } from './utils/dataFetch';
import NewsStand from './components/NewsStand';
import './styles/main.css';

const state = {
  dateInfo: new Date(),
  gridImgs: getGridImgs()
};

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({ dateInfo: state.dateInfo, gridImgs: state.gridImgs });

app.append(newsStand.element);
