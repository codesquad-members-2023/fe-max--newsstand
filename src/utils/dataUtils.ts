const serverUrl = 'http://localhost:3000';

export const getGridImgs = async ():Promise<GridImg[]> => {
  const response =  await fetch(`${serverUrl}/mediaBrands`);
  return await response.json();
}

export const getHeadlineNews = async ():Promise<HeadlineNews[]> => {
  const response = await fetch(`${serverUrl}/headlineNews`);
  return await response.json();
}

export const getNewsList = async (index:number, category: string = '') => {
  const response = await fetch(`${serverUrl}/newsList?index=${index}&category=${category}`);
  return await response.json();
}

export const getNewsFields = async () => {
  const response = await fetch(`${serverUrl}/newsList/fields`);
  return await response.json();
}

export const getSubscribedMedias = () => {
  const subscribedMediasInStorage = localStorage.getItem('subscribedMedias');
  if (subscribedMediasInStorage === null) {
    return [];
  }
  return JSON.parse(subscribedMediasInStorage);
}

export const setSubscribedMedias = (subscribedMedias:string[]) => {
  localStorage.setItem('subscribedMedias', JSON.stringify(subscribedMedias));
}