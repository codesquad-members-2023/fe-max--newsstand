import { NewsStand } from './components/NewsStand.ts';
import { OneLineNews, GridNewsData, ListNewsData } from './types.ts';
import './scss/main.scss';

type State = {
  systemDate: Date;
  oneLineNews: OneLineNews[];
  gridData: GridNewsData[];
  listData: ListNewsData[];
};

function shuffleArray(array: GridNewsData[]): GridNewsData[] {
  if (array.length < 2) {
    return array;
  }

  const newArray = array.filter(Boolean);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

async function fetchData(path: string) {
  const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/${path}`).then((res) => res.json());

  return data;
}

async function createState(): Promise<State> {
  const [oneLineNews, gridDataRaw, listData] = await Promise.all([
    fetchData('oneLineNews'),
    fetchData('gridData'),
    fetchData('listData'),
  ]);

  const gridData = shuffleArray(gridDataRaw);

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
