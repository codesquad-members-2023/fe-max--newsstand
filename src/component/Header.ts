import { Base } from "./Base";

type HeaderState = {
  date: Date;
};

export class Header extends Base {
  constructor(private props: HeaderState) {
    super();

    this.render(`
      <header class="header">
        <div class="header__title">
            <img class="header__title-logo" src="./src/assets/logo.svg" addClick="refresh">
            <span class="header__title-text">뉴스스탠드</span>
        </div>
        <div class="header__date" data-component="headerDate">
          ${this.getDate(this.props.date)}
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

  update(props: HeaderState) {
    const date = this.getDate(this.props.date);
    const newDate = this.getDate(new Date(props.date));

    if (date !== newDate) {
      this.component["headerDate"].innerText = newDate;
      this.props = props;
    }
  }
}
