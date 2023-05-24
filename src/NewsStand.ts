import Header from "./Header";
import style from './NewsStand.module.css'

export default class NewsStand {
  public element: HTMLElement;
  private header: Header;
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add(style.news_stand);
    
    this.header = new Header();

    this.element.append(this.header.element);
  }
}