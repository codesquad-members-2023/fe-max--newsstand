import { Component } from '../../Component';

export class Header extends Component {
  logoArea: HTMLAnchorElement;
  dateArea: HTMLDivElement;

  constructor(props) {
    super(props);
    this.render();
    this.mount();
  }

  render(): void {
    this.element = document.createElement('header');

    this.renderLogoArea();
    this.renderDateArea();
  }

  // setEvent() {
  //   this.logoArea.addEventListener('click', () => {
  //     window.location.reload();
  //   });
  // }

  mount() {
    this.element.append(this.logoArea, this.dateArea);
  }

  getCurrentDate({ systemDate }: { systemDate: Date }) {
    const year = systemDate.getFullYear();
    const month = (systemDate.getMonth() + 1).toString().padStart(2, '0');
    const date = systemDate.getDate().toString().padStart(2, '0');
    const day = systemDate.toLocaleDateString('ko-KR', { weekday: 'long' });

    return `${year}. ${month}. ${date}. ${day}`;
  }

  renderLogoArea() {
    const logoArea = document.createElement('a');
    logoArea.setAttribute('href', '/');
    logoArea.classList.add('logo__area');

    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', '/src/assets/logo.svg');
    logoImg.setAttribute('alt', '뉴스스탠드');

    const title = document.createElement('h1');
    title.textContent = '뉴스스탠드';

    logoArea.append(logoImg, title);
    this.logoArea = logoArea;
  }

  renderDateArea() {
    const dateArea = document.createElement('div');

    dateArea.className = 'system-date';
    dateArea.textContent = this.getCurrentDate(this.props);
    this.dateArea = dateArea;
  }
}
