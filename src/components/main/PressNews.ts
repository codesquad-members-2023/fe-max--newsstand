import { createElement } from '../../utils/domUtils';
import { SubscribeButton } from './SubscribeButton';
import style from './ListView.module.css';

export class PressNews {
  public element;
  private pressInfo;
  private news;

  constructor() {
    this.element = createElement('article', { class: style.press_news });
    this.pressInfo = this.createPressInfo();
    this.news = this.createNewsSection();

    this.element.append(this.pressInfo, this.news);
  }

  createPressInfo() {
    const pressInfo = createElement('header', { class: style.press_info });

    const brandMark = createElement('a', { class: style.brand_mark});
    const brandMarkImage = createElement('img', {
      src: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png',
      alt: '노컷뉴스'
    });
    brandMark.append(brandMarkImage);

    const editDate = createElement('span', { class: [style.edit_date, 'font-body-xs'] });
    editDate.textContent = '06월 08일 06:25 직접 편집';

    const subscribeButton = new SubscribeButton();

    pressInfo.append(brandMark, editDate, subscribeButton.element);

    return pressInfo;
  }

  createNewsSection() {
    const newsSection = createElement('section', { class: style.news_section });

    const mainNews = createElement('div', { class: style.main_news});
    const thumbnailAnchor = createElement('a', { href: 'https://www.nocutnews.co.kr/news/5955685'})
    const thumbnail = createElement('img', {
      class: style.thumbnail,
      src: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0608%2Farticle_img%2Fnew_main%2F9028%2F063104_001.jpg%22&type=nf312_208&service=navermain',
      alt: '한국노총 경사노위 탈퇴···벼랑 치닫는 勞政'
    });
    const mainTitle = createElement('a', { href:'https://www.nocutnews.co.kr/news/5955685', class: [style.main_title, 'font-body-md'] });
    mainTitle.textContent = '한국노총 경사노위 탈퇴···벼랑 치닫는 勞政';
    thumbnailAnchor.append(thumbnail)
    mainNews.append(thumbnailAnchor, mainTitle);

    const subNews = createElement('div', { class: style.sub_news});
    const subNewsContainer = createElement('ul', { class: style.sub_news__container});
    const subNewsItems = [
      {
        "title": "[영상]이번엔 '집회 특진' 내건 경찰···정작 현장은 '싸늘'",
        "url": "https://www.nocutnews.co.kr/news/5955679"
      },
      {
        "title": "11년만의 안보리 진출···北 압박공조 기대, 한계도",
        "url": "https://www.nocutnews.co.kr/news/5955691"
      },
      {
        "title": "세계경제 '꿈틀'에도 한국경제는 성장전망 역주행",
        "url": "https://www.nocutnews.co.kr/news/5955566"
      },
      {
        "title": "국힘 지지율 추월한 尹지지율···총선에 도움될까?",
        "url": "https://www.nocutnews.co.kr/news/5955695"
      },
      {
        "title": "[영상]이래경 후폭풍···이재명은 왜 '원로그룹' 고집했나",
        "url": "https://www.nocutnews.co.kr/news/5955688"
      },
      {
        "title": "위험자산 선호 심리 회복···美 연준 변수는 '여전'",
        "url": "https://www.nocutnews.co.kr/news/5955605"
      }
    ].map((news) => {
      const wrapper = createElement('li', { class: [style.sub_news__item, 'font-body-md']});
      const item = createElement('a', { href: news.url });
      item.textContent = news.title;

      wrapper.append(item);

      return wrapper;
    });
    const caption = createElement('span', { class: [style.sub_news__caption, 'font-body-sm']})
    caption.textContent = `미주한국일보 언론사에서 직접 편집한 뉴스입니다`

    subNewsContainer.append(...subNewsItems, caption);
    subNews.append(subNewsContainer);

    newsSection.append(mainNews, subNews);

    return newsSection;
  }
}
