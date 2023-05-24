import NewsStand from './NewsStand';
import './styles/main.css'

const state = {
  dateInfo: new Date()
}

const app = document.querySelector('#app')!;
const newsStand = new NewsStand({ dateInfo: state.dateInfo });

app.append(newsStand.element);
