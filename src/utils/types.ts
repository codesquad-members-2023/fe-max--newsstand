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
};

export interface IncrementTick {
  type: "INCREMENT_TICK";
}

export interface ToggleRollingState {
  type: "TOGGLE_ROLLING_STATE";
  target: "left" | "right";
}

export interface IncrementPage {
  type: "INCREMENT_PAGE";
}

export interface DecrementPage {
  type: "DECREMENT_PAGE";
}

export interface SelectAllContent {
  type: "SELECT_ALL_CONTENT";
}

export interface SelectSubContent {
  type: "SELECT_SUB_CONTENT";
  list: [];
}

export type Action =
  | IncrementTick
  | ToggleRollingState
  | IncrementPage
  | DecrementPage
  | SelectAllContent
  | SelectSubContent;
