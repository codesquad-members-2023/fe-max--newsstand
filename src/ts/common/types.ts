export type State = {
  roller: Roller;

  viewMode: ViewMode;

  grid: Grid;

  list: List;

  [key: string]: Roller | ViewMode | Grid | List;
};

export type Roller = {
  leftRollingList: RollingItem[];
  rightRollingList: RollingItem[];
  rollerTick: number;
};

export type Grid = {
  allGrid: GridItem[];
  curPage: number;
  lastPage: number;
};

export type List = {
  allList: ListItem[];
  categoryIndex: number;
  curCategoryList: ListItem[];
  curCategoryIndex: number;
};

export type ViewMode = {
  view: string;
  mode: string;
  viewMode: string;
};

export type ListItem = {
  title: string;
  pressList: PressList[];
};

export type PressList = {
  pressLogoSrc: string;
  pressLogoAlt: string;
  lastEditted: string;
  mainArticle: {
    thumbnailSrc: string;
    thumbnailAlt: string;
    mainArticleTitle: string;
  };
  subArticles: string[];
};

export type Action = {
  type: string;
  payload?: any;
};

export type RollingItem = {
  media: string;
  title: string;
  link: string;
};

export type GridItem = {
  src: string;
  alt: string;
};
