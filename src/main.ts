import NewsStand from './components/NewsStand';
import { register } from './store';
import './styles/style.css';
import { NewsStandState } from './types';

const main = () => {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    throw new Error('App element is not found.');
  }

  const newsStand = new NewsStand();
  const updateNewsStand = (newState: NewsStandState) => {
    newsStand.render(newState);
  };

  register(updateNewsStand);
  app.append(newsStand.getElement());
};

main();
