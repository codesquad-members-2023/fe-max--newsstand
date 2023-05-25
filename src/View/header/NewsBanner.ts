export const bannerInitialize = () => {
  const banner: HTMLElement | null = document.querySelector(".banner");
  if (banner) {
    createDate(banner, getCurrentDate);
  }
  setEvent();
  print();
};

const createDate = (banner: HTMLElement, getCurrentDate: () => string) => {
  const newsDate = document.createElement("div");
  newsDate.classList.add("banner-right");
  banner.appendChild(newsDate);
  newsDate.textContent = getCurrentDate();

  return newsDate;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit", weekday: "long" };
  const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(currentDate);

  return formattedDate;
};

const setEvent = () => {
  const newsStandLogo: HTMLElement | null = document.querySelector(".banner-left");
  if (newsStandLogo) {
    newsStandLogo.addEventListener("click", () => {
      location.reload();
    });
  }
};
