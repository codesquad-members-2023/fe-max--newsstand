export interface ElementObj {
  type: string;
  tagName: string;
  attributes: { name: string; value: string }[];
  children: (ElementObj | TextElementObj)[];
}

export interface TextElementObj {
  type: string;
  text: string | null;
}

export type ElementType = ElementObj | TextElementObj;

export type Headline = {
  press: string;
  title: string;
};

export type RollerType = {
  headlineList: Headline[];
  headline: Headline[];
  index: number;
  isMove: boolean;
};

export type currentTypeList = { src: string; alt: string }[];

type PressListType = {
  pressLogoSrc: string;
  pressLogoAlt: string;
  lastEditted: string;
  mainArticle: {
    thumbnailSrc: string;
    thumbnailAlt: string;
    mainArticleTitle: string;
  };
  subArticles: String[];
};

export interface ListDataType {
  title: string;
  pressList: PressListType[];
}

export type newsStandState = {
  date: Date;
  leftRoller: RollerType;
  rightRoller: RollerType;
  rollerTick: number;
  currentContent: "grid" | "list";
  currentType: "all" | "sub";
  currentPage: number;
  subscribedPress: string[];
  grid: {
    gridAllList: currentTypeList;
    currentTypeList: currentTypeList;
    currentViewList: currentTypeList;
  };
  list: {
    currentViewIndex: number;
    listAllList: ListDataType[];
    currentTypeList: ListDataType;
    currentViewList: ListDataType;
  };
};

interface IncrementTick {
  type: "INCREMENT_TICK";
}

interface ToggleRollingState {
  type: "TOGGLE_ROLLING_STATE";
  target: "left" | "right";
}

interface IncrementPage {
  type: "INCREMENT_PAGE";
}

interface DecrementPage {
  type: "DECREMENT_PAGE";
}

interface SelectAllContent {
  type: "SELECT_ALL_CONTENT";
}

interface SelectSubContent {
  type: "SELECT_SUB_CONTENT";
}

interface UpdateSubscribe {
  type: "UPDATE_SUBSCRIBE";
  subscribedPress: string[];
}

interface SelectGridTab {
  type: "SELECT_GRID_TAB";
}

interface SelectListTab {
  type: "SELECT_LIST_TAB";
}

export type Action =
  | IncrementTick
  | ToggleRollingState
  | IncrementPage
  | DecrementPage
  | SelectAllContent
  | SelectSubContent
  | UpdateSubscribe
  | SelectGridTab
  | SelectListTab;

