import NewsRoller from './NewsRoller';
import style from './NewsBar.module.css';
import { createElement } from '../../utils/domUtils';
import { getHeadlineNews } from '../../utils/dataUtils';


export default class NewsBar {
  public element;
  private leftNewsRoller: NewsRoller;
  private rightNewsRoller: NewsRoller;

  constructor() {
    this.element = createElement('section', { class: style.news_bar });

    const leftIndex = 0;
    const rightIndex = leftIndex + 1;

    this.leftNewsRoller = new NewsRoller({ index: leftIndex });
    this.rightNewsRoller = new NewsRoller({ index: rightIndex });

    this.element.append(this.leftNewsRoller.element, this.rightNewsRoller.element);
    this.initRender();
  }

  async initRender() {
    const headlineNews = await getHeadlineNews();

    this.leftNewsRoller.setNewsList(headlineNews);
    this.rightNewsRoller.setNewsList(headlineNews);
  
    this.leftNewsRoller.startRollup();
    setTimeout(() => {
      this.rightNewsRoller.startRollup();
    }, 1000);
  
    this.leftNewsRoller.setEvent();
    this.rightNewsRoller.setEvent();
  }
}
