const serverUrl = 'http://localhost:3000';

export const getGridImgs = async ():Promise<GridImg[]> => {
  const response =  await fetch(`${serverUrl}/mediaBrands`);
  return await response.json();
}

export const getHeadlineNews = async ():Promise<HeadlineNews[]> => {
  const response = await fetch(`${serverUrl}/headlineNews`);
  return await response.json();
}

export const getNewsList = async (index:number) => {
  const response = await fetch(`${serverUrl}/newsList?index=${index}`);
  return await response.json();
}

export const getSubscribedIds = () => {
  const subscribedIdsInStorage = localStorage.getItem('subscribedIds');
  if (subscribedIdsInStorage === null) {
    return [];
  }
  return JSON.parse(subscribedIdsInStorage);
}

export const setSubscribedIds = (subscribedIds:number[]) => {
  localStorage.setItem('subscribedIds', JSON.stringify(subscribedIds));
}