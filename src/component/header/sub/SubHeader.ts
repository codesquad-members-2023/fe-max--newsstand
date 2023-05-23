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
            <div class="rolling__wrapper" data-component="leftWrapper" addTransitionend="leftTransitionend">
              ${this.setRolling("left")}
            </div>
          </div>
          <div class="header__sub__rolling rolling-right">
            <div class="rolling__wrapper"  data-component="rightWrapper" addTransitionend="rightTransitionend">
              ${this.setRolling("right")}
            </div>
          </div>
        </div>
    `);
    this.setRollingAnimation();
  }

  setRolling(type: keyof StoreType) {
    const store = this.store[type];
    const itemList = this.setItemList(store);
    const rolling = itemList
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

  setRollingAnimation() {
    setInterval(() => {
      this.setTransform("left");
    }, 5000);

    setTimeout(() => {
      setInterval(() => {
        this.setTransform("right");
      }, 5000);
    }, 1000);
  }

  setItemList(store: RollingDataState) {
    const currentIndex = store.currentIndex;
    const maxIndex = store.data.length - 1;

    if (currentIndex >= maxIndex) {
      return [store.data[maxIndex], store.data[0]];
    }
    return [store.data[currentIndex], store.data[currentIndex + 1]];
  }

  setTransform(target: keyof StoreType) {
    const component = this.components[`${target}Wrapper`];
    const currentIndex = this.store[target].currentIndex;
    const dataLength = this.store[target].data.length;

    component.style.transition = "transform 1s";
    component.style.transform = "translateY(-49px)";
    this.store[target].currentIndex++;
    if (currentIndex === dataLength - 1) {
      this.store[target].currentIndex = 0;
    }
  }

  setTransitionend(target: keyof StoreType) {
    const component = this.components[`${target}Wrapper`];
    const rollingTemplate = this.setRolling(target);

    component.style.transform = "translateY(0px)";
    component.style.transition = "none";
    component.innerHTML = "";
    component.innerHTML = rollingTemplate;
  }

  leftTransitionend() {
    this.setTransitionend("left");
  }

  rightTransitionend() {
    this.setTransitionend("right");
  }
}
