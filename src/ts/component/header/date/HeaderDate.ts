export class HeaderDate {
  constructor(private target: HTMLElement) {
    this.render();
  }

  getToday(): string {
    const newDate = new Date();
    const thisYear = newDate.getFullYear();
    let thisMonth = `${newDate.getMonth() + 1}`;
    let thisDate = `${newDate.getDate()}`;
    const thisDay = newDate.getDay();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const isBeforeOctober = +thisMonth < 10;
    const isDigitDate = +thisDate < 10;

    if (isBeforeOctober) {
      thisMonth = `0${thisMonth}`;
    }

    if (isDigitDate) {
      thisDate = `0${thisDate}`;
    }

    return `${thisYear}. ${thisMonth}. ${thisDate}. ${dayList[thisDay]}요일`;
  }

  render(): void {
    this.target.textContent = this.getToday();
  }
}
