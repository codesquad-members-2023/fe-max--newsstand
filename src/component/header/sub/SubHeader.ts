import { Base } from "../../Base";

export class SubHeader extends Base {
  constructor() {
    super();
    this.render(`
        <div class="header__sub">
            ${this.setSubHeader("연합뉴스", "hi")}
            ${this.setSubHeader("연합뉴스", "bye")}
        </div>
    `);
  }

  setSubHeader(press: string, title: string) {
    return `
        <div class="header__sub__rolling">
            <div class="header__sub__rolling-press">
                ${press}
            </div>
            <div class="header__sub__rolling-title">
                ${title}
            </div>
        </div>
      `;
  }
}

