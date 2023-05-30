export class HeaderDate {
  constructor(private target: HTMLElement) {
    this.render();
  }

  getToday(): string {
    const newDate = new Date();
    const thisYear = newDate.getFullYear();
    const thisMonth = newDate.getMonth() + 1;
    const thisDate = newDate.getDate();
    const thisDay = newDate.getDay();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const isAfterOctober = thisMonth >= 10;

    if (isAfterOctober) {
      return `${thisYear}. ${thisMonth}. ${thisDate}. ${dayList[thisDay]}요일`;
    }

    return `${thisYear}. 0${thisMonth}. ${thisDate}. ${dayList[thisDay]}요일`;
  }

  render(): void {
    this.target.textContent = this.getToday();
  }
}
