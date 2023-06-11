import { LocalStorageKey, Store } from "@store/types";
import { MainViewState, PressLogo } from "..";
import { createAction } from "@store/actions";

export class GridPressBox {
  private readonly logo: PressLogo;
  private readonly store: Store<MainViewState>;
  private isSubscribed: boolean;

  private readonly $pressBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButtonBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButton: HTMLElement = document.createElement("div");
  private readonly $buttonText = document.createElement("div");

  constructor(logo: PressLogo, store: Store<MainViewState>) {
    this.logo = logo;
    this.store = store;
    this.isSubscribed = this.store.getState().gridState.subscribedPressList.includes(logo.alt);

    this.initPressBox(logo);
    this.initSubscribeButton();
    this.initSubscription();
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

  initSubscription() {
    this.store.subscribe(this.updateSubscribedPressInLocalStorage.bind(this));
  }

  updateSubscribedPressInLocalStorage() {
    const subscribedPressList = this.store.getState().gridState.subscribedPressList;
    localStorage.setItem(LocalStorageKey.SUBSCRIBE_PRESS_LIST, JSON.stringify(subscribedPressList));
  }

  setEvents() {
    this.$pressBox.addEventListener("mouseenter", () => {
      this.appendSubscribeBox();
    });

    this.$pressBox.addEventListener("mouseleave", () => {
      this.removeSubscribeBox();
    });

    this.$subscribeButton.addEventListener("click", () => {
      const pressName = this.logo.alt;
      this.store.dispatch(createAction.subscribePress(pressName));
    });
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
