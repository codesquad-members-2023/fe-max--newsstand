import { RollerModel } from "../Model/RollerModel";

export class RollerIntent {
  model: RollerModel;

  constructor(model: RollerModel) {
    this.model = model;
    this.handleLeftMouseEnter = this.handleLeftMouseEnter.bind(this);
    this.handleRightMouseEnter = this.handleRightMouseEnter.bind(this);
    this.handleLeftMouseLeave = this.handleLeftMouseLeave.bind(this);
    this.handleRightMouseLeave = this.handleRightMouseLeave.bind(this);
  }

  handleLeftMouseEnter() {}
  handleRightMouseEnter() {}
  handleLeftMouseLeave() {}
  handleRightMouseLeave() {}
}
