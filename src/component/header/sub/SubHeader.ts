import { Base } from "../../Base";

export class SubHeader extends Base {
  constructor() {
    super();
    this.render(`
        <div class="header__sub">
            ${this.setRolling("연합뉴스", "hi")}
            ${this.setRolling("연합뉴스", "bye")}
        </div>
    `);
  }

  setRolling(press: string, title: string) {
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

