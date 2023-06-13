import { Component } from '../../Component';

export class NewsRoller extends Component {
  protected pressName: HTMLDivElement;
  titleBox: HTMLDivElement;
  currentTitle: HTMLDivElement;
  nextTitle: HTMLDivElement;
  timer: number | NodeJS.Timer;

  constructor(props) {
    super(props);
    this.render();
    this.mount();

    this.startRoller();
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
}
