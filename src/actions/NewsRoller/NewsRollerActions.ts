import { ActionTypes } from "../../constants/ActionsTypes";

export const rollerActions = {
  stopRolling(direction: string) {
    return { type: ActionTypes.STOP_ROLLING, direction };
  },
  resumeRolling(direction: string) {
    return { type: ActionTypes.RESUME_ROLLING, direction };
  },
};

