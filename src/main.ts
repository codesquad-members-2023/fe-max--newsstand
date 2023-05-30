import { NewsStand } from './components/NewsStand.ts';
import { OneLineNews, GridNewsData, ListNewsData } from './types.ts';
import oneLineNewsData from './data/oneLineData.json';
import gridData from './data/gridData.json';
import newsStandData from './data/newsStandData.json';
import './scss/main.scss';

type State = {
  systemDate: Date;
  oneLineNews: OneLineNews[];
  gridData: GridNewsData[];
  listData: ListNewsData[];
};

const state: State = {
  systemDate: new Date(),
  oneLineNews: oneLineNewsData,
  gridData: gridData,
  listData: newsStandData,
};

const newsStand = new NewsStand(state);

function App() {
  const app = document.querySelector('#app');
  app?.append(newsStand.element);
}

App();
