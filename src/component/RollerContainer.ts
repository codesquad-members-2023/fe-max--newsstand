import { dispatcher } from "./../index";
import { Headline } from "../utils/types";
import { Base } from "./Base";
import { Roller } from "./Roller";

type RollerContainerProps = {
  leftRollerHeadline: Headline[];
  rightRollerHeadline: Headline[];
};

export class RollerContainer extends Base {
  left: Roller;
  right: Roller;
  timer: Timer;
  constructor(private props: RollerContainerProps) {
    super();
    this.left = new Roller({
      headlineList: props.leftRollerHeadline,
      position: "left",
    });
    this.right = new Roller({
      headlineList: props.rightRollerHeadline,
      position: "right",
    });

    this.render(`<div class="rollerContainer"></div>`);
    this.setChildren(this.left, this.right);
    this.timer = new Timer();
  }

  update(props: RollerContainerProps) {
    this.left.update({
      headlineList: props.leftRollerHeadline,
      position: "left",
    });
    this.right.update({
      headlineList: props.rightRollerHeadline,
      position: "right",
    });

    this.props = props;
  }
}

class Timer {
  constructor() {
    window.setInterval(() => {
      dispatcher({
        type: "INCREMENT_TICK",
      });
    }, 1000);
  }
}
