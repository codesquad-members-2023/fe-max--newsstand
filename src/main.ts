import { getState } from '@/store';
import NewsStand from '@components/NewsStand';
import '@/styles/main.css';

const app = document.querySelector('#app')!;
const state = getState();
const newsStand = new NewsStand(state);

app.append(newsStand.element);
