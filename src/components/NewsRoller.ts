export class NewsRoller {
  element: HTMLElement;
  name: HTMLDivElement;
  title: HTMLDivElement;

  constructor(props) {
    this.element = document.createElement('div');
    this.element.classList.add('news-bar');

    const name = document.createElement('div');
    this.name = name;
    name.classList.add('news-bar__press-name');
    name.textContent = props[0].name;

    const headLine = document.createElement('div');
    this.title = headLine;
    headLine.classList.add('news-bar__title-box');
    headLine.textContent = props[0].title;

    this.element.append(name, headLine);
  }
}
