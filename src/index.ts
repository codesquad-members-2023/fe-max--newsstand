import reducer from './reducers/Reducer.ts';
import { fetchData, shuffleArray, divideNewsData } from './utils/utils.ts';
import { createStore } from './createStore.ts';
import { App } from './App.ts';
import './scss/main.scss';
import { OneLineNews } from './utils/types.ts';

async function createInitialState() {
  const [breakingNews, newsStandData] = await Promise.all([fetchData('breakingNews'), fetchData('newsData')]);

  const gridData = shuffleArray(newsStandData).slice(0, 96);
  const [leftRollerNews, rightRollerNews] = divideNewsData<OneLineNews>(breakingNews);

  return {
    systemDate: new Date(),
    leftRoller: {
      newsData: leftRollerNews,
      nextTitleIdx: 1,
    },
    rightRoller: {
      newsData: rightRollerNews,
      nextTitleIdx: 1,
    },
    breakingNews,
    gridData,
    newsStandData,
    currentPage: 1,
    subscriptionList: [],
  };
}

const initialState = await createInitialState();
export const store = createStore(reducer, initialState);

const app = new App(store.getState());
