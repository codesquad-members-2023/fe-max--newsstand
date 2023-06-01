import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './NewsRoller.module.css';

type NewsRollerProps = {
  index: number;
  news: HeadlineNews[];
};

export default class NewsRoller {
  public element;
  private roller;
  private currentNewsWrapper;
  private nextNewsWrapper;
  private props;
  private intervalId;

  constructor(props: NewsRollerProps) {
    this.element = createElement('article', { class: style.rolling_news });
    this.roller = createElement('div', { class: style.roller });
    this.currentNewsWrapper = this.createNewsWrapper();
    this.nextNewsWrapper = this.createNewsWrapper();

    this.roller.append(this.currentNewsWrapper, this.nextNewsWrapper);
    this.element.append(this.roller);

    this.setEvent();
    this.props = props;
    this.intervalId = setInterval(() => {
      this.roller.classList.add(style.roll_up)
    }, 3000);
  }

  private createNewsWrapper() {
    const newsWrapper = createElement('div', { class: style.news_wrapper });

    const media = createElement('a', { class: 'font-title-sm', href: '#' });
    media.textContent = '';

    const title = createElement('a', { class: 'font-body-sm', href: '#' });
    title.textContent = '';

    newsWrapper.append(media, title);

    return newsWrapper;
  }

  private setEvent() {
    this.roller.addEventListener('transitionend', (event) => {
      invoke({ type: 'headlineRollerTick'});
    })
  }

  updateView({ index: currentIndex, news }: NewsRollerProps) {
    const currentHeadlineTitle = this.getHeadlineNews(this.props.index, this.props.news);
    const newHeadlineTitle = this.getHeadlineNews(currentIndex, news);

    if (currentHeadlineTitle === newHeadlineTitle) {
      return;
    }

    const nextIndex = currentIndex + 2;

    this.setHeadlineNews(this.currentNewsWrapper, this.getHeadlineNews(currentIndex, news));
    this.setHeadlineNews(this.nextNewsWrapper, this.getHeadlineNews(nextIndex + 2, news));

    this.roller.classList.remove(style.roll_up)
  }

  private setHeadlineNews(newsWrapper: HTMLElement, headlineNews: HeadlineNews) {
    const media = newsWrapper.firstElementChild;
    const title = newsWrapper.lastElementChild;

    if (!headlineNews || !media || !title) {
      return;
    }
    media.textContent = headlineNews.media;
    media.setAttribute('href', headlineNews.mediaUrl);

    title.textContent = headlineNews.news;
    title.setAttribute('href', headlineNews.newsUrl);
  }

  private getHeadlineNews(index: number, news: HeadlineNews[]) {
    const numberOfNews = news.length;
    const newsIndex = index % numberOfNews;

    return news[newsIndex];
  }
}
