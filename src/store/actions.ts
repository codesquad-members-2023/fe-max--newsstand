import { shuffleArray } from "@utils/shuffleArray";
import { Action, ActionType } from "./types";
import { PressLogo } from "@components/mainView";

export const createAction = {
  fetchPressLogos(logos: PressLogo[]): Action {
    return {
      type: ActionType.FETCH_PRESS_LOGOS,
      payload: {
        logos,
      },
    };
  },

  shufflePressLogos(): Action {
    return { type: ActionType.SHUFFLE_PRESS_LIST, payload: { fn: shuffleArray } };
  },

  updateLastPage(): Action {
    return { type: ActionType.UPDATE_LAST_PAGE };
  },

  prevButtonClick(): Action {
    return { type: ActionType.PREV_BUTTON_CLICK };
  },

  nextButtonClick(): Action {
    return { type: ActionType.NEXT_BUTTON_CLICK };
  },

  setSubscribedPressList(): Action {
    return { type: ActionType.SET_SUBSCRIBED_PRESS_LIST };
  },

  subscribePress(pressName: string): Action {
    return {
      type: ActionType.SUBSCRIBE_PRESS,
      payload: {
        pressName,
      },
    };
  },

  unsubscribePress(pressName: string): Action {
    return {
      type: ActionType.UNSUBSCRIBE_PRESS,
      payload: {
        pressName,
      },
    };
  },

  allPressTabClick(): Action {
    return { type: ActionType.ALL_PRESS_TAB_CLICK };
  },

  subscribedPressTabClick(): Action {
    return { type: ActionType.SUBSCRIBED_PRESS_TAB_CLICK };
  },
};
