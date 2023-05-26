import { Headline } from "../utils/types";
import { Base } from "./Base";

type rollerProps = {
  headlineList: Headline[];
};

export class Roller extends Base {
  constructor(private props: rollerProps) {
    super();
    this.render(`
            <div class="rollerContainer__roller">
                <div class="rollerContainer__roller__wrapper"  addTransitionend="handleTransitionend" data-component="rollerWrapper">
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
                    ${item.media}
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
        prop.media !== newList[index].media ||
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

      target.style.transition = "none";
      newList.forEach((_, index) => {
        // TODO press, media 언론사명을 두가지 이름으로 사용중이다 press로 통일하기
        pressElements[index].textContent = newList[index].media;
        titleElements[index].textContent = newList[index].title;
      });
      target.style.transform = "translateY(0px)";
    }
  }
}

