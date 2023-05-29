// import { NewsStand } from './components/NewsStand.ts';
import oneLineNewsData from './data/oneLineData.json';
import newsStandData from './data/newsStandData.json';
import './scss/main.scss';

const state = {
  oneLineNews: oneLineNewsData,
  newsData: newsStandData,
};
class NewsStand {
  element: HTMLElement;
  header: Header;
  rollingSection: RollingSection;
  main: Main;

  constructor() {
    this.element = document.createElement('div');
    this.element.id = 'newsStand';

    this.header = new Header();
    this.rollingSection = new RollingSection();
    this.main = new Main();

    this.element.append(this.header.element, this.rollingSection.element, this.main.element);
  }
}

class Header {
  element: HTMLElement;
  systemDate: HTMLDivElement;
  constructor() {
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

class RollingSection {
  element: HTMLElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('auto-rolling__area');

    const newsRollerLeft = new NewsRoller();
    const newsRollerRight = new NewsRoller();

    this.element.append(newsRollerLeft.element, newsRollerRight.element);
  }
}

class NewsRoller {
  element: HTMLElement;
  name: HTMLDivElement;
  title: HTMLDivElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('news-bar');

    const name = document.createElement('div');
    this.name = name;
    name.classList.add('press-name');
    name.textContent = state.oneLineNews[0].officeName;

    const headLine = document.createElement('div');
    this.title = headLine;
    headLine.classList.add('news-oneline');
    headLine.textContent = state.oneLineNews[0].title;

    this.element.append(name, headLine);
  }
}

class Main {
  element: HTMLElement;

  constructor() {
    this.element = document.createElement('main');

    {
      const headerTab = document.createElement('header');
      headerTab.classList.add('header--main');

      {
        const tabBtnMenu = document.createElement('div');
        tabBtnMenu.classList.add('tab-btn__menu');

        const showAllBtn = document.createElement('div');
        showAllBtn.classList.add('tab-btn__item', 'active');
        showAllBtn.textContent = '전체 언론사';

        const showSubscribedBtn = document.createElement('div');
        showSubscribedBtn.classList.add('tab-btn__item');
        showSubscribedBtn.textContent = '내가 구독한 언론사';

        tabBtnMenu.append(showAllBtn, showSubscribedBtn);
        headerTab.append(tabBtnMenu);
      }

      {
        const viewBtnMenu = document.createElement('div');
        viewBtnMenu.classList.add('view-btn__menu');

        const listBtn = document.createElement('button');
        listBtn.classList.add('view-btn__item', 'list-icon');

        const gridBtn = document.createElement('button');
        gridBtn.classList.add('view-btn__item', 'grid-icon', 'active');

        viewBtnMenu.append(listBtn, gridBtn);
        headerTab.append(viewBtnMenu);
      }

      this.element.append(headerTab);
    }

    const content = document.createElement('div');
    content.classList.add('content-area');

    const gridView = new GridView();
    content.append(gridView.leftBtn, gridView.rightBtn, gridView.element);

    this.element.append(content);
  }
}

class GridView {
  element: HTMLElement;
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridItems: HTMLElement[];

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('grid-container');

    const leftBtn = document.createElement('button');
    this.leftBtn = leftBtn;
    leftBtn.classList.add('btn', 'btn--left');

    const rightBtn = document.createElement('button');
    this.rightBtn = rightBtn;
    rightBtn.classList.add('btn', 'btn--right');

    this.gridItems = [];
    const cellNum = 24;
    for (let i = 0; i < cellNum; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const logoImg = document.createElement('img');
      logoImg.classList.add('press-logo');

      gridItem.append(logoImg);
      this.element.append(gridItem);

      this.gridItems.push(gridItem);
    }

    this.render();
  }

  render() {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      itemImg.src = state.newsData[idx].logoURL;
      itemImg.alt = state.newsData[idx].name;
    });
  }
}

const newsStand = new NewsStand();

function App() {
  const app = document.querySelector('#app');
  app?.append(newsStand.element);
}

App();
