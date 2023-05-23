import { Base } from "../../Base";

export class MainHeader extends Base {
  constructor() {
    super();
    this.render(`
        <div class="header__main">
            <div class="header__main__title">
                <img class="header__main__title-logo" src="./src/assets/logo.svg" addClick="refresh">
                <span class="header__main__title-text">뉴스스탠드</span>
            </div>
            <div class="header__main__date">${this.getDate()}</div>
        </div>
    `);
  }

  getDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    const days = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const day = days[now.getDay()];

    return `${year}. ${month}. ${date}. ${day}`;
  }

  refresh() {
    location.reload();
  }
}

