import { Roller, rollerProps } from "./Roller";
import { RollerType } from "../utils/types";
import { store } from "../Store";
import { Base } from "./Base";

type RollerContainerState = {
  leftRoller: RollerType;
  rightRoller: RollerType;
};

export class RollerContainer extends Base {
  left: Roller;
  right: Roller;
  timer: Timer;

  constructor(private props: RollerContainerState) {
    super();
    const leftRollerState: rollerProps = {
      headlineList: this.props.leftRoller.headline,
      position: "left",
    };
    const rightRollerState: rollerProps = {
      headlineList: this.props.rightRoller.headline,
      position: "right",
    };

    this.left = new Roller(leftRollerState);
    this.right = new Roller(rightRollerState);
    this.timer = new Timer();

    this.render(`<div class="rollerContainer"></div>`);
    this.setChildren(this.left, this.right);
  }

  update(props: RollerContainerState) {
    this.left.update({
      headlineList: props.leftRoller.headline,
      position: "left",
    });

    this.right.update({
      headlineList: props.rightRoller.headline,
      position: "right",
    });

    this.props = props;
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
