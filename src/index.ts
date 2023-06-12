import reducer from './reducers/Reducer.ts';
import { fetchData, shuffleArray } from './utils/utils.ts';
import { createStore } from './createStore.ts';
import { App } from './App.ts';
import './scss/main.scss';

async function createInitialState() {
  const [breakingNews, newsStandData] = await Promise.all([fetchData('breakingNews'), fetchData('newsData')]);

  const gridData = shuffleArray(newsStandData).slice(0, 96);

  return {
    systemDate: new Date(),
    rollingNews: {
      titleIdx: 1,
      timer: 0,
    },
    breakingNews,
    gridData,
    newsStandData,
    currentPage: 1,
    subscriptionList: [],
  };
}

const initialState = await createInitialState();
const store = createStore(reducer, initialState);

// store.subscribe(() => {
//   newsStand.update();
// });

new App(store.getState());
