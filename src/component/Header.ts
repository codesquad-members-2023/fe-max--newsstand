import { Base } from "./Base";

type HeaderState = {
  date: Date;
};

export class Header extends Base {
  constructor(private state: HeaderState) {
    super();

    this.render(`
      <header class="header">
        <div class="header__title">
            <img class="header__title-logo" src="./src/assets/logo.svg" addClick="refresh">
            <span class="header__title-text">뉴스스탠드</span>
        </div>
        <div class="header__date" data-component="headerDate">
          ${this.getDate(this.state.date)}
        </div>
      </header>`);
  }

  getDate(date: Date) {
    const koreanDateFormat = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
    }).format(date);
    return koreanDateFormat;
  }

  refresh() {
    location.reload();
  }

  update(newState: HeaderState) {
    const date = this.component["headerDate"].innerText;
    const newDate = this.getDate(newState.date);

    if (date !== newDate) {
      this.component["headerDate"].innerText = newDate;
      this.state = newState;
    }
  }
}

