import RollingNews from './RollingNews';
import style from './NewsBar.module.css';
import { createElement } from '../../utils/domUtils';

type NewsBarProps = {
  headlineInfo: HeadlineInfo
}

export default class NewsBar {
  public element;
  private leftRollingNews: RollingNews;
  private rightRollingNews: RollingNews;

  constructor(props: NewsBarProps) {
    this.element = createElement('section', { class: style.news_bar });

    this.leftRollingNews = new RollingNews({ index: props.headlineInfo.leftIndex, news: props.headlineInfo.news });
    this.rightRollingNews = new RollingNews({ index: props.headlineInfo.rightIndex, news: props.headlineInfo.news });

    this.element.append(this.leftRollingNews.element, this.rightRollingNews.element);
  }

  updateView(props: NewsBarProps) {
    this.leftRollingNews.updateProps({ index: props.headlineInfo.leftIndex, news: props.headlineInfo.news });
    this.rightRollingNews.updateProps({ index: props.headlineInfo.rightIndex, news: props.headlineInfo.news });
  }
}
