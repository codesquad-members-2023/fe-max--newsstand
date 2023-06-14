export function initHeader(logoEl: HTMLElement, dateEl: HTMLElement) {
  setEvent(logoEl);
  setDate(dateEl);
}

function setEvent(logoEl: HTMLElement) {
  logoEl.addEventListener('click', () => location.reload());
}

export function getToday(newDate: Date): string {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  };
  const today = new Intl.DateTimeFormat('ko-KR', dateOptions).format(newDate);

  return today;
}

function setDate(dateEl: HTMLElement): void {
  const newDate = new Date();
  dateEl.textContent = getToday(newDate);
}
