import { NewsStand } from './components/NewsStand.ts';
import { OneLineNews, GridNewsData, ListNewsData } from './types.ts';
import './scss/main.scss';

type State = {
  systemDate: Date;
  oneLineNews: OneLineNews[];
  gridData: GridNewsData[];
  listData: ListNewsData[];
};

async function fetchData(path: string) {
  const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/${path}`).then((res) => res.json());

  return data;
}

async function createState() {
  const [oneLineNews, gridData, listData] = await Promise.all([
    fetchData('oneLineNews'),
    fetchData('gridData'),
    fetchData('listData'),
  ]);

  return {
    systemDate: new Date(),
    oneLineNews,
    gridData,
    listData,
  };
}

const newsStand = new NewsStand(await createState());

function App() {
  const app = document.querySelector('#app');
  app?.append(newsStand.element);
}

App();

console.log(import.meta.env.VITE_SERVER_URL);
