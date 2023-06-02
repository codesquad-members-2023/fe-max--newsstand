import { PressLogo } from "../mainView";

export class GridPressBox {
  private readonly $pressBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButtonBox: HTMLElement = document.createElement("div");

  constructor(logo: PressLogo) {
    this.initPressBox(logo);
    this.initSubscribeButton();
    this.setEvents();
  }

  initSubscribeButton() {
    const button = document.createElement("div");
    button.className = "grid-view-group__subscribe-button";

    const plusIcon = document.createElement("div");
    plusIcon.className = "grid-view-group__subscribe-button-icon";

    const buttonText = document.createElement("div");
    buttonText.className = "grid-view-group__subscribe-button-text";
    buttonText.textContent = "구독하기";

    button.append(plusIcon, buttonText);
    this.$subscribeButtonBox.append(button);
  }

  initPressBox(logo: PressLogo) {
    const image = document.createElement("img");

    this.$pressBox.className = "grid-view-group__press-box";
    this.$subscribeButtonBox.className = "grid-view-group__subscribe-box";

    image.className = "grid-view-group__press-image";
    image.src = logo.src;
    image.alt = logo.alt;

    this.$pressBox.append(image);
  }

  setEvents() {
    this.$pressBox.addEventListener("mouseenter", () => {
      this.appendSubscribeBox();
    });

    this.$pressBox.addEventListener("mouseleave", () => {
      this.deleteSubscribeBox();
    });
  }

  appendSubscribeBox() {
    this.$pressBox.append(this.$subscribeButtonBox);
  }

  deleteSubscribeBox() {
    this.$subscribeButtonBox.remove();
  }

  getElement() {
    return this.$pressBox;
  }
}
