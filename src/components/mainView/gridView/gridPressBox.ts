import { GridStore, PressLogo } from "../mainView";

export class GridPressBox {
  private readonly logo: PressLogo;
  private readonly gridStore: GridStore;
  private isSubscribed: boolean;

  private readonly $pressBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButtonBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButton: HTMLElement = document.createElement("div");
  private readonly $buttonText = document.createElement("div");

  constructor(logo: PressLogo, gridStore: GridStore) {
    this.logo = logo;
    this.gridStore = gridStore;
    this.isSubscribed = this.gridStore.isSubscribedPress(logo.alt);

    this.initPressBox(logo);
    this.initSubscribeButton();
    this.setEvents();
  }

  initPressBox(logo: PressLogo) {
    this.$pressBox.className = "grid-view-group__press-box";

    const image = document.createElement("img");
    image.className = "grid-view-group__press-image";
    image.src = logo.src;
    image.alt = logo.alt;

    this.$pressBox.append(image);
  }

  initSubscribeButton() {
    this.$subscribeButtonBox.className = "grid-view-group__subscribe-box";
    this.$subscribeButton.className = "grid-view-group__subscribe-button";

    const plusIcon = document.createElement("div");
    plusIcon.className = "grid-view-group__subscribe-button-icon";

    this.$buttonText.className = "grid-view-group__subscribe-button-text";
    this.$buttonText.textContent = this.isSubscribed ? "해지하기" : "구독하기";

    this.$subscribeButton.append(plusIcon, this.$buttonText);
    this.$subscribeButtonBox.append(this.$subscribeButton);
  }

  toggleSubscribeState() {
    this.isSubscribed = !this.isSubscribed;
  }

  updateButtonText() {
    this.$buttonText.textContent = this.isSubscribed ? "해지하기" : "구독하기";
  }

  setEvents() {
    this.$pressBox.addEventListener("mouseenter", () => {
      this.appendSubscribeBox();
    });

    this.$pressBox.addEventListener("mouseleave", () => {
      this.removeSubscribeBox();
    });

    this.$subscribeButton.addEventListener("click", () => {
      this.handleSubscribedButtonClick();
    });
  }

  handleSubscribedButtonClick() {
    if (this.isSubscribed) {
      this.unsubscribePress();

      return;
    }

    this.subscribePress();
  }

  subscribePress() {
    const pressName = this.logo.alt;
    const subscribedPressList = this.gridStore.getSubscribedPressList();
    const newSubscribedPressList = [...subscribedPressList, pressName];

    localStorage.setItem("subscribed-press-list", JSON.stringify(newSubscribedPressList));
    this.gridStore.updateSubscribedPressList();
    this.toggleSubscribeState();
    this.updateButtonText();
  }

  unsubscribePress() {
    const pressName = this.logo.alt;
    const subscribedPressList = this.gridStore.getSubscribedPressList();
    const newSubscribedPressList = subscribedPressList.filter((press) => press !== pressName);

    localStorage.setItem("subscribed-press-list", JSON.stringify(newSubscribedPressList));
    this.gridStore.updateSubscribedPressList();
    this.toggleSubscribeState();
    this.updateButtonText();
  }

  appendSubscribeBox() {
    this.$pressBox.append(this.$subscribeButtonBox);
  }

  removeSubscribeBox() {
    this.$subscribeButtonBox.remove();
  }

  getElement() {
    return this.$pressBox;
  }
}
