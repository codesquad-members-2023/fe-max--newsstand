import { OneLineNews } from '../types';

export class NewsRoller {
  private state: {
    titleIdx: number;
  };
  readonly props: OneLineNews[];
  element: HTMLElement;
  name: HTMLDivElement;
  titleBox: HTMLDivElement;
  currentTitle: HTMLDivElement;
  timer;

  constructor(props: OneLineNews[], direction: string) {
    this.state = {
      titleIdx: 1,
    };
    this.props = props;
    this.element = document.createElement('div');
    this.element.classList.add('news-bar');

    const name = document.createElement('div');
    this.name = name;
    name.classList.add('news-bar__name');
    name.textContent = props[0].name;

    const titleBox = document.createElement('div');
    this.titleBox = titleBox;
    titleBox.classList.add('news-bar__title-box');

    const title = document.createElement('div');
    this.currentTitle = title;
    title.classList.add('title');
    title.textContent = props[0].title;

    this.titleBox.append(title);

    this.element.append(name, titleBox);

    if (direction === 'right') {
      setTimeout(() => {
        this.startRoller();
        this.setEvent();
      }, 1000);
      return;
    }

    this.startRoller();
    this.setEvent();
  }

  startRoller() {
    const timer = setInterval(() => {
      const nextTitle = document.createElement('div');
      nextTitle.classList.add('title');
      nextTitle.setAttribute('style', 'top: 1rem');
      nextTitle.textContent = this.props[this.state.titleIdx].title;

      this.state.titleIdx += 1;
      this.state.titleIdx %= 5;

      this.titleBox.append(nextTitle);

      this.currentTitle.classList.add('roll');
      nextTitle.classList.add('roll');

      setTimeout(() => {
        this.titleBox.removeChild(this.currentTitle);
        this.currentTitle = nextTitle;
        nextTitle.removeAttribute('style');
        nextTitle.classList.remove('roll');
      }, 600);
    }, 5000);

    this.timer = timer;
  }

  setEvent() {
    this.titleBox.addEventListener('mouseenter', () => {
      clearInterval(this.timer);
    });
    this.titleBox.addEventListener('mouseleave', () => {
      this.startRoller();
    });
  }
}
