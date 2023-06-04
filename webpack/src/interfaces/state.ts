import { RollingTurn } from "../constants/RollingTurn";
import { RollingNews } from "./rollingNews";

export interface state {
  date: Date;
  leftRollingNews: RollingNews;
  rightRollingNews: RollingNews;
  rollingTurn: RollingTurn;
  leftRollingNewsIndex: number;
  rightRollingNewsIndex: number;
  fetchFirstRollingNews: boolean;
  rollingFlag: boolean;
}
