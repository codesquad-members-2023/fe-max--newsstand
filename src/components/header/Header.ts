export function Header() {
  const header = document.querySelector(".header");
  render();
  setEvent();

  function render() {
    header!.innerHTML = `
    <div class="header__logo">
      <img src="/public/images/logo.svg" />
      <div>뉴스스탠드</div>
    </div>
    ${NewsDate()}
    <!-- <div class="header__news-date"></div> -->
    `;
  }
  function setEvent() {
    const logo = document.querySelector(".header__logo");
    logo!.addEventListener("click", () => {
      location.reload();
    });
  }
}

export function NewsDate() {
  function getCurrentDate() {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
    };
    const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(currentDate);
    return formattedDate;
  }

  return `
  <div class="header__news-date">${getCurrentDate()}</div>
  `;
}
