import { Component } from "../core/Component";
import { getGlobalStore } from "../utils/globalStore";

export class DateDisplay extends Component {
  private store;

  constructor(tagName: string) {
    super(tagName);
    this.store = getGlobalStore();
    this.store.subscribe("date", () => {
      this.render();
    });
  }

  render() {
    const { date } = this.store.state;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토", "일"][
      date.getDay()
    ];

    this.element.textContent = `${year}. ${month < 10 ? "0" + month : month}. ${
      day < 10 ? "0" + day : day
    }. ${dayOfWeek}요일`;
  }
}
