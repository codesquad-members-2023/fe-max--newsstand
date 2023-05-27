export const bannerInitialize = () => {
  const banner: HTMLElement | null = document.querySelector('.banner');
  if (banner) {
    createDate(banner, getCurrentDate);
  }
  setEvent();
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  };
  const formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(currentDate);

  return formattedDate;
};

const createDate = (banner: HTMLElement, getDateFn: () => string) => {
  const newsDate = document.createElement('div');
  newsDate.classList.add('banner-right');
  banner.appendChild(newsDate);
  newsDate.textContent = getDateFn();

  return newsDate;
};

const setEvent = () => {
  const newsStandLogo: HTMLElement | null = document.querySelector('.banner-left');
  if (newsStandLogo) {
    newsStandLogo.addEventListener('click', () => {
      location.reload();
    });
  }
};
