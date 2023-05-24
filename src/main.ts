import NewsStand from './NewsStand';
import './main.css'

const app = document.querySelector('#app')!;
const newsStand = new NewsStand();

app.append(newsStand.element);
