import { createElement } from '@utils/domUtils';
import style from '@components/newsBar/NewsRoller.module.css';

export default class NewsRoller {
  public readonly element;
  private roller;
  private currentNewsWrapper;
  private nextNewsWrapper;
  private index: number;
  private newsList: HeadlineNews[] = [];
  private intervalId: number | null = null;

  constructor({ index }: { index: number }) {
    this.index = index;

    this.element = createElement('article', { class: style.rolling_news });
    const newsDisplay = createElement('div', { class: style.news_display });
    this.roller = createElement('div', { class: style.roller });
    this.currentNewsWrapper = this.createNewsWrapper();
    this.nextNewsWrapper = this.createNewsWrapper();

    this.roller.append(this.currentNewsWrapper, this.nextNewsWrapper);
    newsDisplay.append(this.roller);
    this.element.append(newsDisplay);
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

  setEvent() {
    this.roller.addEventListener('transitionend', () => {
      this.increaseIndex();
      this.updateView();
      this.inactivateRollup();
    });
    this.element.addEventListener('mouseenter', () => {
      this.pauseRollup();
    });
    this.element.addEventListener('mouseleave', () => {
      this.startRollup();
    });
  }

  setNewsList(news: HeadlineNews[]) {
    this.newsList = news;
    this.updateView();
  }

  private updateView() {
    const currentIndex = this.index % this.newsList.length;
    const nextIndex = (this.index + 2) % this.newsList.length;

    this.updateNewsData(this.currentNewsWrapper, this.newsList[currentIndex]!);
    this.updateNewsData(this.nextNewsWrapper, this.newsList[nextIndex]!);
  }

  private updateNewsData(newsWrapper: HTMLElement, headlineNews: HeadlineNews) {
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

  startRollup() {
    this.intervalId = window.setInterval(() => {
      this.activateRollup();
    }, 3000);
  }

  private pauseRollup() {
    if (!this.intervalId) {
      return;
    }
    this.inactivateRollup();
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private increaseIndex() {
    this.index = this.index + 2;
  }

  private inactivateRollup() {
    this.roller.classList.remove(style.roll_up!);
  }

  private activateRollup() {
    this.roller.classList.add(style.roll_up!);
  }
}
