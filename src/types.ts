export type OneLineNews = {
  type: string;
  name: string;
  title: string;
  url: string;
};

export type GridNewsData = {
  pid: string;
  logoURL: string;
  name: string;
};

export type ListNewsData = {
  type: string;
  category: string;
  name: string;
  pid: string;
  logoURL: string;
  regDate: string;
  materials: ListMaterial[];
};

type ListMaterial = {
  type: string;
  title: string;
  imgURL: string | null;
  url: string;
};

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
