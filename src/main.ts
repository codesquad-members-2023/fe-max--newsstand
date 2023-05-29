// import { NewsStand } from './components/NewsStand.ts';
import './scss/main.scss';

const state = {
  systemDate: new Date(),
  oneLines: [
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: "'김남국 방지법' 만장일치 국회통과…의원 코인 재산신고 의무화",
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964935',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: "'전세사기 특별법' 국회통과…최우선변제금만큼 무이자대출",
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964507',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: "'자녀 특혜채용 의혹' 선관위 사무총장·차장 나란히 자진사퇴",
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964350',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: "우크라 '전황' 주시하는 대통령실…무기 지원 현실화하나",
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013963473',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: '이창용 "금리인상 옵션 열어놔…못 올릴 거라 생각하면 안 돼"',
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013963828',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: '최강 태풍에 괌 韓여행객 수백명 발동동…"방 침수에 지붕 뜯겨"',
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964762',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: "'최저임금' 노사 다시 신경전…인상폭·적용범위 등에서 충돌",
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964720',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: "오늘밤 대법원 앞 '노숙농성' 강행…경찰 강제해산 방침",
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964930',
    },
    {
      type: 'NEWS-ONELINE',
      officeName: '연합뉴스',
      title: '이성만 "이정근에 100만원 준 적 없어…녹취록도 짜깁기"',
      url: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013964520',
    },
  ],
};

class NewsStand {
  element: HTMLElement;
  header: Header;
  rollingSection: RollingSection;
  // main: Main;

  constructor() {
    this.element = document.createElement('div');
    this.element.id = 'newsStand';

    this.header = new Header();
    this.rollingSection = new RollingSection();
    // this.main = new Main();

    this.element.append(this.header.element, this.rollingSection.element);
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

    const newRollerLeft = new NewsRoller();
    const newsRollerRight = new NewsRoller();

    this.element.append(newRollerLeft.element, newsRollerRight.element);
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
    name.textContent = state.oneLines[0].officeName;

    const headLine = document.createElement('div');
    this.title = headLine;
    headLine.classList.add('news-oneline');
    headLine.textContent = state.oneLines[0].title;

    this.element.append(name, headLine);
  }
}

const newsStand = new NewsStand();

function App() {
  const app = document.querySelector('#app');
  app?.append(newsStand.element);
}

App();
