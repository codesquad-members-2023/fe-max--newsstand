import Header from "./Header";
import NewsBar from "./NewsBar";
import style from './NewsStand.module.css'

type NewsStandProps = {
  dateInfo: Date
}

export default class NewsStand {
  public element: HTMLElement;
  private header: Header;
  private newsBar: NewsBar;

  constructor(props: NewsStandProps) {
    this.element = document.createElement("div");
    this.element.classList.add(style.news_stand);
    
    this.header = new Header({ dateInfo: props.dateInfo});
    this.newsBar = new NewsBar();

    this.element.append(this.header.element, this.newsBar.element);
  }
}