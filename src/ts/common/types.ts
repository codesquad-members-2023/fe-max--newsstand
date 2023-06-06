export type State = {
  leftRollingList: RollingItem[];
  rightRollingList: RollingItem[];
  rollerTick: number;

  gridList: GridItem[];
  curPage: number;
  lastPage: number;
};

export type GridState = {
  gridList: GridItem[];
  curPage: number;
  lastPage: number;
};

export type Action = {
  type: string;
  playload?: any;
};

export type GridItem = {
  src: string;
  alt: string;
};

export type RollingItem = {
  media: string;
  title: string;
  link: string;
};
