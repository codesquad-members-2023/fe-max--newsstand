import { RollingTurn } from "../constants/RollingTurn";

export interface RollingProps {
  direction: keyof typeof RollingTurn
}