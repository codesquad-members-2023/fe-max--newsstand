export type State = {
  roller: {
    leftRollingList: RollingItem[];
    rightRollingList: RollingItem[];
    rollerTick: number;
  };

  viewMode: {
    view: string;
    mode: string;
    viewMode: string;
  };

  grid: {
    allGrid: GridItem[];
    curPage: number;
    lastPage: number;
  };

  list: {
    allList: ListItem[];
    categoryIndex: number;
    curCategoryList: ListItem[]; // allList[categoryIndex] = curCategoryList
    curCategoryIndex: number; // curCategoryList.pressList[curCategoryIndex] = curCategoryItem
  };

  [key: string]: any;
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

export type GridState = {
  gridList: GridItem[];
  curPage: number;
  lastPage: number;
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
