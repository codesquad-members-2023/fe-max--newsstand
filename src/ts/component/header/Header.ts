export class Header {
  constructor(private logo: HTMLElement, private date: HTMLElement) {
    this.setEvent();
    this.render();
  }

  private setEvent() {
    this.logo.addEventListener('click', () => location.reload());
  }

  private getToday(): string {
    const newDate = new Date();
    const thisYear = newDate.getFullYear();
    const isBeforeOctober = newDate.getMonth() + 1 < 10;
    const isDigitDate = newDate.getDate() < 10;
    const thisMonth = isBeforeOctober ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
    const thisDate = isDigitDate ? `0${newDate.getDate()}` : newDate.getDate();
    const thisDay = newDate.getDay();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];

    return `${thisYear}. ${thisMonth}. ${thisDate}. ${dayList[thisDay]}요일`;
  }

  private render(): void {
    this.date.textContent = this.getToday();
  }
}
