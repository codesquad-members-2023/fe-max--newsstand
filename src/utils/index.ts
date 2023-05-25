export function getDateString(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeekIdx = date.getDay();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][dayOfWeekIdx];

  return `${year}. ${month}. ${day}. ${dayOfWeek}요일`;
}
