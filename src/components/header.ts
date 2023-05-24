export function getHeaderTemplate() {
  return `
  <header class="news-stand__header">
    <div class="news-stand__logo">
      <img src="src/assets/icons/newspaper.svg" alt="뉴스 스탠드"/>
      <h1>뉴스 스탠드</h1>
    </div>
    <div class="news-stand__system-date">
      <p>${getDate()}</p>
    </div>
  </header>
  `;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dayOfWeek = date.toLocaleDateString('ko-KR', {weekday: 'long'});

  return `${year}. ${month}. ${day}. ${dayOfWeek}`;
}