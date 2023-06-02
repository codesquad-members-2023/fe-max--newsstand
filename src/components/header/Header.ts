import { createElement } from '../../utils/domUtils';
import style from './Header.module.css';

type HeaderProps = {
  dateInfo: Date;
};

export default class Header {
  public element;
  private logo;
  private date;

  constructor(props: HeaderProps) {
    this.element = createElement('header', { class: style.header });
    this.logo = this.createLogoElement();
    this.date = createElement('p', { class: 'font-body-md' });

    this.initElement();
    this.render(props);
    this.setEvent();
  }

  private initElement() {
    this.element.append(this.logo, this.date);
  }

  private createLogoElement() {
    const logo = createElement('a', { href: '#', class: style.logo });
    const img = createElement('img', { src: 'assets/icons/newspaper.svg', alt: '뉴스 스탠드' });
    const title = createElement('h1', { class: 'font-display' });
    title.textContent = '뉴스 스탠드';

    logo.append(img, title);

    return logo;
  }

  private render(props: HeaderProps) {
    this.date.textContent = this.getDate(props.dateInfo);
  }

  private setEvent() {
    this.logo.addEventListener('click', (event) => {
      event.preventDefault();
      location.reload();
    });
  }

  private getDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dayOfWeek = date.toLocaleDateString('ko-KR', { weekday: 'long' });

    return `${year}. ${month}. ${day}. ${dayOfWeek}`;
  }
}
