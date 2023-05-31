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

  constructor(props: OneLineNews[]) {
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
    this.startRoller();
  }

  startRoller() {
    setInterval(() => {
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
        console.log(this.currentTitle);
        nextTitle.removeAttribute('style');
        nextTitle.classList.remove('roll');
      }, 600);
    }, 3000);
  }
}
