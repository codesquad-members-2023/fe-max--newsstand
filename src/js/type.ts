export interface State {
  date: string;
  isAllPress: boolean;
  isGrid: boolean;
  pageIndex: number;
}

export interface Action {
  type: string;
  payload?: string;
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
  headline: { press: string; title: string; url: string }[];
  leftIndex: number;
  rightIndex: number;
}

export interface GridViewProps {
  sizeOfGrid: number;
}

export interface GridContentsProps {
  pressList: { src: string; alt: string }[];
  subscribedPress: { src: string; alt: string }[];
}

export interface MainContentsProps {
  prevBtnImg: string;
  nextBtnImg: string;
}

export interface ListViewProps {
  category: string[];
  numberOfListContents: number;
}

export interface ListContentsProps {
  newsList: any;
}
