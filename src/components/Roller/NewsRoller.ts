import { Component } from '../../Component';
import { Actions } from '../../actions';
import { RollerState } from '../../utils/types';

export class NewsRoller extends Component {
  pressName: HTMLDivElement;
  titleBox: HTMLDivElement;
  currentTitle: HTMLDivElement;
  nextTitle: HTMLDivElement;
  timer: number | NodeJS.Timer;
  startTime: number;
  rAF: number;
  position: string;

  constructor(props: RollerState, position: string) {
    super(props);
    this.render();
    this.setEvent();
    this.mount();

    this.position = position;
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
      Actions.roll(this.position);
    });
    this.titleBox.addEventListener('mouseenter', () => {
      window.cancelAnimationFrame(this.rAF);
    });
    this.titleBox.addEventListener('mouseleave', () => {
      requestAnimationFrame(this.rolling);
    });
  }

  mount() {
    this.element.append(this.pressName, this.titleBox);
  }

  update(newState: RollerState) {
    // if (!newState.isRolling) {
    //   cancelAnimationFrame(this.rAF);
    //   return;
    // }
    // requestAnimationFrame(this.rolling);

    this.titleBox.classList.remove('roll');

    if (newState.nextTitleIdx === 0) {
      this.currentTitle.textContent = newState.newsData[newState.newsData.length - 1]?.title || '';
    } else {
      this.currentTitle.textContent = newState.newsData[newState.nextTitleIdx - 1]?.title || '';
    }

    this.nextTitle.textContent = newState.newsData[newState.nextTitleIdx]?.title || '';
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

  rolling = (timestamp: number) => {
    if (!this.startTime) {
      this.startTime = timestamp;
    }

    const intervalTime = timestamp - this.startTime;

    if (intervalTime >= 3000) {
      this.titleBox.classList.add('roll');
      this.startTime = 0;
    }

    this.rAF = requestAnimationFrame(this.rolling);
  };
}
