import { Roller, GridData, newsStandState, Headline } from "../utils/types";

const rollingResponse = await fetch("http://localhost:8080/rolling");
const headlineList = await rollingResponse.json();
const gridResponse = await fetch("http://localhost:8080/grid");
const gridList = await gridResponse.json();

class Store {
  private state: newsStandState;
  constructor(private gridList: GridData, private headlineList: Headline[]) {
    this.state = this.setState(this.gridList, this.headlineList);
  }

  setState(gridList: GridData, headlineList: Headline[]) {
    const leftHeadlineList = headlineList.slice(0, headlineList.length / 2);
    const rightHeadlineList = headlineList.slice(headlineList.length / 2);
    const initialGridList = gridList.slice(0, 24);
    const girdMode: "grid" | "list" = "grid";

    return {
      date: new Date(),
      leftRoller: {
        headlineList: leftHeadlineList,
        headline: [leftHeadlineList[0], leftHeadlineList[1]],
        index: 0,
        isMove: true,
      },
      rightRoller: {
        headlineList: rightHeadlineList,
        headline: [rightHeadlineList[0], rightHeadlineList[1]],
        index: 0,
        isMove: true,
      },
      rollerTick: 0,
      currentMode: girdMode,
      gird: {
        gridData: initialGridList,
      },
    };
  }

  addRollerTick() {
    this.state.rollerTick++;
  }

  incrementIndex(type: "left" | "right") {
    const roller = this.getRoller(type);
    if (roller.isMove) {
      this.updateRoller(roller);
    }
  }

  toggleRollingState(target: "left" | "right") {
    const roller = this.getRoller(target);
    roller.isMove = !roller.isMove;
  }

  getRoller(type: "left" | "right") {
    return type === "left" ? this.state.leftRoller : this.state.rightRoller;
  }

  updateRoller(roller: Roller) {
    roller.index++;
    roller.index %= roller.headlineList.length;

    const nextIndex = (roller.index + 1) % roller.headlineList.length;

    roller.headline = [
      roller.headlineList[roller.index],
      roller.headlineList[nextIndex],
    ];
  }

  incrementTick() {
    const ROLLING_TICK = 5;
    this.addRollerTick();
    if (this.state.rollerTick % ROLLING_TICK === 0) {
      this.incrementIndex("left");
    } else if (
      this.state.rollerTick > ROLLING_TICK &&
      this.state.rollerTick % ROLLING_TICK === 1
    ) {
      this.incrementIndex("right");
    }
  }

  getState() {
    return this.state;
  }
}

export const store = new Store(gridList, headlineList);
