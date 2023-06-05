import { RollerType, newsStandState } from "../utils/types";
import { Base } from "./Base";
import { Roller, rollerProps } from "./Roller";
import { store } from "../Store";

type RollerContainerState = {
  leftRoller: RollerType;
  rightRoller: RollerType;
};

export class RollerContainer extends Base {
  left: Roller;
  right: Roller;
  timer: Timer;

  constructor(private state: RollerContainerState) {
    super();
    const leftRollerState: rollerProps = {
      headlineList: this.state.leftRoller.headline,
      position: "left",
    };
    const rightRollerState: rollerProps = {
      headlineList: this.state.rightRoller.headline,
      position: "right",
    };

    this.left = new Roller(leftRollerState);
    this.right = new Roller(rightRollerState);
    this.timer = new Timer();

    this.render(`<div class="rollerContainer"></div>`);
    this.setChildren(this.left, this.right);

    store.subscribe((newState: newsStandState) => {
      this.update(newState);
    });
  }

  update(state: RollerContainerState) {
    this.left.update({
      headlineList: state.leftRoller.headline,
      position: "left",
    });

    this.right.update({
      headlineList: state.rightRoller.headline,
      position: "right",
    });

    this.state = state;
  }
}

class Timer {
  constructor() {
    window.setInterval(() => {
      store.dispatch({
        type: "INCREMENT_TICK",
      });
    }, 1000);
  }
}
