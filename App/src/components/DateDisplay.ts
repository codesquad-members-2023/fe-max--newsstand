import { Component } from "../core/Component";
import { getGlobalStore } from "../utils/globalStore";

export class DateDisplay extends Component {
  private store;

  constructor(tagName:string) {
    super(tagName);
    this.store = getGlobalStore();
    this.store.subscribe("date", () => {
      this.render();
    });
  }

  render() {
    const { date } = this.store.state;
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토", "일"][
      date.getDay()
    ];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    //     <p class="date">XXXX. XX. XX. X요일</p>
    this.element.textContent = `${year}. ${month < 10 ? "0" + month : month}. ${day < 10 ? "0" + day : day}. ${dayOfWeek}요일`;
  }
}
