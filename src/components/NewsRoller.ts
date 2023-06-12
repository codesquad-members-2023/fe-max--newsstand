import { Component } from '../Component';
import { OneLineNews } from '../utils/types';

export class NewsRoller extends Component {
  private state: {
    titleIdx: number;
  };

  pressName: HTMLDivElement;
  titleBox: HTMLDivElement;
  currentTitle: HTMLDivElement;
  timer: number | NodeJS.Timer;

  constructor(props) {
    super(props);

    // this.startRoller();
    // this.setEvent();
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('news-bar');

    this.renderPressName();
    this.renderNewsTitle();
  }

  // setEvent() {
  //   this.titleBox.addEventListener('mouseenter', () => {
  //     clearInterval(this.timer);
  //   });
  //   this.titleBox.addEventListener('mouseleave', () => {
  //     this.startRoller();
  //   });
  // }

  mount() {
    this.element.append(this.pressName, this.titleBox);
  }

  renderPressName() {
    const pressName = document.createElement('div');
    this.pressName = pressName;
    pressName.classList.add('news-bar__name');
    pressName.textContent = this.props.breakingNews[0].name;
  }

  renderNewsTitle() {
    const titleBox = document.createElement('div');
    this.titleBox = titleBox;
    titleBox.classList.add('news-bar__title-box');

    const newsTitle = document.createElement('div');
    this.currentTitle = newsTitle;
    newsTitle.classList.add('title');
    newsTitle.textContent = this.props.breakingNews[0].title;

    this.titleBox.append(newsTitle);
  }

  // startRoller() {
  //   const timer = setInterval(() => {
  //     const nextTitle = document.createElement('div');
  //     nextTitle.classList.add('title');
  //     nextTitle.setAttribute('style', 'top: 1rem');
  //     nextTitle.textContent = this.props.breakingNews[this.props.rollingNews.titleIdx].title;

  //     this.state.titleIdx += 1;
  //     this.state.titleIdx %= 5;

  //     this.titleBox.append(nextTitle);

  //     this.currentTitle.classList.add('roll');
  //     nextTitle.classList.add('roll');

  //     setTimeout(() => {
  //       this.titleBox.removeChild(this.currentTitle);
  //       this.currentTitle = nextTitle;
  //       nextTitle.removeAttribute('style');
  //       nextTitle.classList.remove('roll');
  //     }, 600);
  //   }, 5000);

  //   this.timer = timer;
  // }
}
