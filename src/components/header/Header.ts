export const Header = () => {
  const setEvent = () => {
    const newsStandLogo = document.querySelector(".header-left");
    newsStandLogo?.addEventListener("click", () => {
      location.reload();
    });
  };
  return { setEvent };
};

export const NewsDate = () => {
  const newsDate = document.querySelector(".header-right");

  const render = () => {
    if (!newsDate) return;
    newsDate.innerHTML = getCurrentDate();
  };
  return { render };
};

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
