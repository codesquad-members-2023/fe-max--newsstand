export type OneLineNews = {
  type: string;
  name: string;
  title: string;
  url: string;
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

export type State = {
  systemDate: Date;
  rollingNews: {
    titleIdx: number;
    timer: number;
  };
  breakingNews: OneLineNews[];
  gridData: ListNewsData[];
  newsStandData: ListNewsData[];
  currentPage: number;
  subscriptionList: string[];
};

export type Action<T extends string = string> = {
  type: T;
};
export interface UnknownAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: unknown;
}

export type Reducer<S = any, A = UnknownAction> = (state: S | undefined, action: A) => S;

export type ListenerCallback = () => void;

export interface Dispatch<A extends Action = UnknownAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T;
}

export interface Store<S = any, A extends Action = UnknownAction, StateExt extends object = object> {
  dispatch: Dispatch<A>;
  getState(): S & StateExt;
  subscribe(listener: ListenerCallback): void;
}
