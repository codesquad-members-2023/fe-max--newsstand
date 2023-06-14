import { LocalStorageKey, Store } from "@store/types";
import { MainViewState, Press } from "..";
import { createAction } from "@store/actions";

export class GridPressBox {
  private readonly press: Press;
  private readonly store: Store<MainViewState>;
  private isSubscribed: boolean;

  private readonly $pressBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButtonBox: HTMLElement = document.createElement("div");
  private readonly $subscribeButton: HTMLElement = document.createElement("div");
  private readonly $buttonText = document.createElement("div");

  constructor(press: Press, store: Store<MainViewState>) {
    this.press = press;
    this.store = store;
    this.isSubscribed = this.store.getState().gridState.subscribedPressList.includes(press.alt);

    this.initPressBox(press);
    this.initSubscribeButton();
    this.initSubscription();
    this.setEvents();
  }

  initPressBox(press: Press) {
    this.$pressBox.className = "grid-view-group__press-box";

    const image = document.createElement("img");
    image.className = "grid-view-group__press-image";
    image.src = press.src;
    image.alt = press.alt;

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
      const pressName = this.press.alt;

      const action = this.isSubscribed
        ? createAction.unsubscribePress(pressName)
        : createAction.subscribePress(pressName);

      this.store.dispatch(action);
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
