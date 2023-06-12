import reducer from './Reducer.ts';
import { fetchData, shuffleArray } from './utils/utils.ts';
import { createStore } from './store/Store.ts';
import { App } from './App.ts';
import './scss/main.scss';

async function createInitialState() {
  const [breakingNews, newsStandData] = await Promise.all([fetchData('breakingNews'), fetchData('newsData')]);

  const gridData = shuffleArray(newsStandData).slice(0, 96);

  return {
    systemDate: new Date(),
    breakingNews,
    gridData,
    newsStandData,
    currentPage: 1,
    targetCell: {},
    subscriptionList: [],
  };
}

const initialState = await createInitialState();
const store = createStore(reducer);

// store.subscribe(() => {
//   newsStand.update();
// });

new App(initialState);
