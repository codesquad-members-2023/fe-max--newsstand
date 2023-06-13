import NewsStand from './components/NewsStand';
import { getState } from './store';
import './styles/main.css';

const app = document.querySelector('#app')!;
const state = getState();

const newsStand = new NewsStand({
  dateInfo: state.dateInfo,
  gridInfo: state.gridInfo,
  subscriptionInfo: state.subscribedMediaIds,
  mainViewerInfo: {
    targetMedia: state.targetMedia,
    viewer: state.viewer
  },
  news: state.news,
  fields: state.fields,
  listIndex: state.listIndex,
  arrowInfo: state.arrowInfo
});

app.append(newsStand.element);

export const onChangeState = () => {
  newsStand.updateView({
    dateInfo: state.dateInfo,
    gridInfo: state.gridInfo,
    subscriptionInfo: state.subscribedMediaIds,
    mainViewerInfo: {
      targetMedia: state.targetMedia,
      viewer: state.viewer
    },
    news: state.news,
    fields: state.fields,
    listIndex: state.listIndex,
    arrowInfo: state.arrowInfo
  });
};
