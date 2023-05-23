import store from "../../../store/store";
import { Base } from "../../Base";

export class SubHeader extends Base {
  store: StoreType;
  constructor() {
    super();
    this.store = store;
    this.render(`
        <div class="header__sub">
          <div class="header__sub__rolling rolling-left">
            <div class="rolling__wrapper">
              ${this.setRolling(this.store.left.data)}
            </div>
          </div>
          <div class="header__sub__rolling rolling-right">
            <div class="rolling__wrapper">
              ${this.setRolling(this.store.right.data)}
            </div>
          </div>
        </div>
    `);
  }

  setRolling(data: RollingDataType[]) {
    const rolling = data
      .map((item) => {
        return `
        <div class="rolling__wrapper__item">
          <div class="rolling__wrapper__item-press">
            ${item.media}
          </div>
          <div class="rolling__wrapper__item-title">
            ${item.title}
          </div>
        </div>`;
      })
      .join("");
    return rolling;
  }
  // return rolling;

  async fetchData() {
    const response = await fetch("http://localhost:8080/rolling");
    const data = await response.json();
    return data;
  }
}

