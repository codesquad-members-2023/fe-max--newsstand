import style from './Header.module.css';

export default class Header {
  public element: HTMLElement;
  private logo: HTMLDivElement;
  private img: HTMLImageElement;
  private h1: HTMLHeadingElement;
  private date: HTMLParagraphElement;

  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add(style.header);

    this.logo = document.createElement('div');
    this.logo.classList.add();
    this.logo.classList.add(style.logo);

    this.img = document.createElement('img');
    this.img.setAttribute('src', 'src/assets/icons/newspaper.svg');
    this.img.setAttribute('alt', '뉴스 스탠드');

    this.h1 = document.createElement('h1');
    this.h1.classList.add('font-display');
    this.h1.textContent = '뉴스 스탠드';

    this.date = document.createElement('p');
    this.date.classList.add('font-body-md');
    this.date.textContent = getDate();

    this.logo.append(this.img, this.h1);
    this.element.append(this.logo, this.date);
  }
}

function getDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dayOfWeek = date.toLocaleDateString('ko-KR', { weekday: 'long' });

  return `${year}. ${month}. ${day}. ${dayOfWeek}`;
}
