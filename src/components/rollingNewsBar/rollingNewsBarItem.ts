export interface RollingNewsData {
  press: string;
  title: string;
  link: string;
}

export class RollingNewsBarItem {
  private item: HTMLDivElement = document.createElement("div");
  private press: HTMLDivElement = document.createElement("div");
  private title: HTMLAnchorElement = document.createElement("a");

  constructor(
    { press, title, link }: RollingNewsData = {
      press: "...",
      title: "데이터를 받아오고 있습니다.",
      link: "",
    }
  ) {
    this.item.className = "rolling-news-bar__item";
    this.press.className = "rolling-news-bar__press";
    this.title.className = "rolling-news-bar__title";

    this.press.textContent = press;
    this.title.textContent = title;
    this.title.href = link;

    this.item.append(this.press, this.title);
  }

  getElement() {
    return this.item;
  }

  getTitleElement() {
    return this.title;
  }

  updateData({ press, title, link }: RollingNewsData) {
    this.press.textContent = press;
    this.title.textContent = title;
    this.title.href = link;
  }
}
