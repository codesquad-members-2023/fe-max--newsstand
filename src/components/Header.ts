export class Header {
  props: Date;
  element: HTMLElement;
  systemDate: HTMLDivElement;

  constructor(props: Date) {
    this.props = props;
    this.element = document.createElement('header');

    const logo = document.createElement('a');
    logo.setAttribute('href', '#');
    logo.classList.add('logo__area');

    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', '/src/assets/logo.svg');
    logoImg.setAttribute('alt', '뉴스스탠드');

    const title = document.createElement('h1');
    title.textContent = '뉴스스탠드';

    const systemDate = document.createElement('div');
    this.systemDate = systemDate;
    systemDate.className = 'system-date';
    systemDate.textContent = this.getCurrentDate(props);

    logo.append(logoImg, title);
    this.element.append(logo, systemDate);
  }

  getCurrentDate(systemDate: Date) {
    const year = systemDate.getFullYear();
    const month = (systemDate.getMonth() + 1).toString().padStart(2, '0');
    const date = systemDate.getDate().toString().padStart(2, '0');
    const day = systemDate.toLocaleDateString('ko-KR', { weekday: 'long' });

    return `${year}. ${month}. ${date}. ${day}`;
  }
}
