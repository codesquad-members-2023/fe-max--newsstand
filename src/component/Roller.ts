import { store } from "../Store";
import { Headline } from "../utils/types";
import { Base } from "./Base";

export type rollerProps = {
  headlineList: Headline[];
  position: "left" | "right";
};

export class Roller extends Base {
  constructor(private props: rollerProps) {
    super();
    this.render(`
        <div class="rollerContainer__roller" addMouseenter="handleMouseOver" addMouseleave="handleMouseleave">
            <div class="rollerContainer__roller__wrapper" addTransitionend="handleTransitionend" data-component="rollerWrapper">
                ${this.setRoller(props.headlineList)}
            </div>
        </div>`);
  }

  setRoller(headlineList: Headline[]) {
    return headlineList
      .map((item) => {
        return `
            <div class="rollerContainer__roller__wrapper__item">
                <div class="rollerContainer__roller__wrapper__item-press" data-components="press">
                    ${item.press}
                </div>
                <div class="rollerContainer__roller__wrapper__item-title" data-components="title">
                    ${item.title}
                </div>
            </div>`;
      })
      .join("");
  }

  update(props: rollerProps) {
    const component = this.component["rollerWrapper"];
    const currentList = this.props.headlineList;
    const newList = props.headlineList;

    component.style.transition = "transform 1s";

    currentList.forEach((prop, index) => {
      const isChanged =
        prop.press !== newList[index].press ||
        prop.title !== newList[index].title;

      if (isChanged) {
        component.style.transform = "translateY(-49px)";
        this.props = props;
      }
    });
  }

  handleTransitionend(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement) {
      const newList = this.props.headlineList;
      const pressElements = this.components["press"];
      const titleElements = this.components["title"];

      newList.forEach((_, index) => {
        pressElements[index].textContent = newList[index].press;
        titleElements[index].textContent = newList[index].title;
      });

      target.style.transition = "none";
      target.style.transform = "translateY(0px)";
    }
  }

  handleMouseOver() {
    store.dispatch({
      type: "TOGGLE_ROLLING_STATE",
      target: this.props.position,
    });
  }

  handleMouseleave() {
    store.dispatch({
      type: "TOGGLE_ROLLING_STATE",
      target: this.props.position,
    });
  }
}
