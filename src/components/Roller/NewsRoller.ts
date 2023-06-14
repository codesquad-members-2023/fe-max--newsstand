import { Component } from '../../Component';
import { rolling } from '../../actions';
import { store } from '../../index';

export class NewsRoller extends Component {
  protected pressName: HTMLDivElement;
  titleBox: HTMLDivElement;
  currentTitle: HTMLDivElement;
  nextTitle: HTMLDivElement;
  timer: number | NodeJS.Timer;
  startTime: number;
  rAF: number;

  constructor(props) {
    super(props);
    this.render();
    this.setEvent();
    this.mount();

    // this.startRoller();
    this.startTime = 0;
    requestAnimationFrame(this.rolling);
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('news-bar');

    this.renderPressName();
    this.renderNewsTitle();
  }

  setEvent() {
    this.titleBox.addEventListener('animationend', () => {
      store.dispatch(rolling);
    });
    // this.titleBox.addEventListener('mouseenter', () => {
    //   clearInterval(this.timer);
    // });
    // this.titleBox.addEventListener('mouseleave', () => {
    //   this.startRoller();
    // });
  }

  mount() {
    this.element.append(this.pressName, this.titleBox);
  }

  update() {
    this.props.nextTitleIdx += 1;
    this.props.nextTitleIdx %= 5;

    const prevCurrentTitle = this.currentTitle;
    const prevNextTitle = this.nextTitle;
    console.log(prevCurrentTitle, prevNextTitle);
    debugger;

    prevCurrentTitle.classList.remove('roll');
    prevCurrentTitle.setAttribute('style', 'top: 2rem');
    prevCurrentTitle.textContent = this.props.newsData[this.props.nextTitleIdx].title;

    prevNextTitle.removeAttribute('style');
    prevNextTitle.classList.remove('roll');

    this.nextTitle = prevCurrentTitle;
    this.currentTitle = prevNextTitle;
  }

  renderPressName() {
    const pressName = document.createElement('div');
    this.pressName = pressName;

    this.pressName.classList.add('news-bar__name');
    this.pressName.textContent = this.props.newsData[0]?.name || '';
  }

  renderNewsTitle() {
    this.titleBox = document.createElement('div');

    this.titleBox.classList.add('news-bar__title-box');

    const newsTitle = document.createElement('div');
    newsTitle.classList.add('title');
    newsTitle.textContent = this.props.newsData[0]?.title || '';
    this.currentTitle = newsTitle;

    const nextNewsTitle = document.createElement('div');
    nextNewsTitle.classList.add('title');
    nextNewsTitle.setAttribute('style', 'top: 2rem');
    nextNewsTitle.textContent = this.props.newsData[1]?.title || '';
    this.nextTitle = nextNewsTitle;

    this.titleBox.append(newsTitle, nextNewsTitle);
  }

  startRoller() {
    const timer = setInterval(() => {
      this.nextTitle.textContent = this.props.newsData[this.props.nextTitleIdx].title;

      this.props.nextTitleIdx += 1;
      this.props.nextTitleIdx %= 5;

      this.currentTitle.classList.add('roll');
      this.nextTitle.classList.add('roll');

      setTimeout(() => {
        this.currentTitle.classList.remove('roll');
        this.currentTitle.setAttribute('style', 'top: 2rem');
        this.currentTitle.textContent = this.props.newsData[this.props.nextTitleIdx].title;

        const pastNextTitle = this.nextTitle;
        this.nextTitle = this.currentTitle;

        this.currentTitle = pastNextTitle;
        this.currentTitle.removeAttribute('style');
        this.currentTitle.classList.remove('roll');
      }, 600);
    }, 5000);

    this.timer = timer;
  }

  rolling = (timestamp) => {
    if (!this.startTime) {
      this.startTime = timestamp;
    }

    const intervalTime = timestamp - this.startTime;

    if (intervalTime >= 3000) {
      this.currentTitle.classList.add('roll');
      this.nextTitle.classList.add('roll');
      this.startTime = 0;
    }

    this.rAF = requestAnimationFrame(this.rolling);
  };
}
