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

export type GridData = { src: string; alt: string }[];

export type newsStandState = {
  date: Date;
  leftRoller: RollerType;
  rightRoller: RollerType;
  rollerTick: number;
  currentMode: "grid" | "list";
  currentPage: number;
  grid: {
    gridData: GridData;
    currentGridList: GridData;
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

export type Action =
  | IncrementTick
  | ToggleRollingState
  | IncrementPage
  | DecrementPage;

