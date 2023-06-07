export interface State {
  isAllPress: boolean;
  isGrid: boolean;
  gridIndex: number;
}

export interface Action {
  type: string;
}

export type Reducer = (state: State, action: Action) => State;

export type Subscriber = () => void;

export interface HeaderProps {
  title: string;
  date: string;
}

export interface HeaderProps {
  title: string;
  date: string;
}

export interface TapviewProps {
  allBtn: string;
  subscribeBtn: string;
}

export interface RollingNewsProps {
  leftPress: string;
  rightPress: string;
  leftArticle: string;
  rightArticle: string;
}

export interface GridProps {
  pressList: { src: string; alt: string }[];
}

export interface MainContentsProps {
  prevBtnImg: string;
  nextBtnImg: string;
}

export interface ListProps {
  category: string[];
  newsList: string[];
}
