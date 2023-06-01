import NewsRoller from './NewsRoller';
import style from './NewsBar.module.css';
import { createElement } from '../../utils/domUtils';

type NewsBarProps = {
  headlineInfo: HeadlineInfo;
};

export default class NewsBar {
  public element;
  private leftNewsRoller: NewsRoller;
  private rightNewsRoller: NewsRoller;

  constructor(props: NewsBarProps) {
    this.element = createElement('section', { class: style.news_bar });

    this.leftNewsRoller = new NewsRoller({
      index: props.headlineInfo.leftIndex,
      news: props.headlineInfo.news
    });
    this.rightNewsRoller = new NewsRoller({
      index: props.headlineInfo.rightIndex,
      news: props.headlineInfo.news
    });

    this.element.append(this.leftNewsRoller.element, this.rightNewsRoller.element);
  }

  updateView(props: NewsBarProps) {
    this.leftNewsRoller.updateView({
      index: props.headlineInfo.leftIndex,
      news: props.headlineInfo.news
    });
    this.rightNewsRoller.updateView({
      index: props.headlineInfo.rightIndex,
      news: props.headlineInfo.news
    });
  }
}
