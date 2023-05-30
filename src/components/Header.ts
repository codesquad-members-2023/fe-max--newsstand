export class Header {
  element: HTMLElement;
  systemDate: HTMLDivElement;

  constructor(props) {
    this.element = document.createElement('header');

    const logo = document.createElement('a');
    logo.classList.add('logo__area');

    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', '/src/assets/logo.svg');
    logoImg.setAttribute('alt', '뉴스스탠드');

    const title = document.createElement('h1');
    title.textContent = '뉴스스탠드';

    const systemDate = document.createElement('div');
    this.systemDate = systemDate;
    systemDate.className = 'system-date';
    systemDate.textContent = '2023. 05. 26. 금요일';

    logo.append(logoImg, title);
    this.element.append(logo, systemDate);
  }
}
