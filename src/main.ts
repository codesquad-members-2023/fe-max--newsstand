import { NewsStand } from './components/NewsStand.ts';
import { OneLineNews, GridNewsData, ListNewsData } from './types.ts';
import './scss/main.scss';

type State = {
  systemDate: Date;
  oneLineNews: OneLineNews[];
  gridData: GridNewsData[];
  listData: ListNewsData[];
};

async function fetchData(path) {
  const data = await fetch(`http://localhost:3000/${path}`).then((res) => res.json());

  return data;
}

async function createState() {
  const state: State = {
    systemDate: new Date(),
    oneLineNews: await fetchData('oneLineNews'),
    gridData: await fetchData('gridData'),
    listData: await fetchData('listData'),
  };

  return state;
}

const newsStand = new NewsStand(await createState());

function App() {
  const app = document.querySelector('#app');
  app?.append(newsStand.element);
}

App();
