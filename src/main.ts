import { NewsStand } from './components/NewsStand.ts';
import oneLineNewsData from './data/oneLineData.json';
import newsStandData from './data/newsStandData.json';
import './scss/main.scss';

const state = {
  systemDate: new Date(),
  oneLineNews: oneLineNewsData,
  newsData: newsStandData,
};

const newsStand = new NewsStand(state);

function App() {
  const app = document.querySelector('#app');
  app?.append(newsStand.element);
}

App();
