import { shuffleArray } from "@utils/shuffleArray";
import { Action, ActionType } from "./types";

export const createAction = {
  async fetchPressLogos(): Promise<Action | void> {
    try {
      const response = await fetch("http://localhost:8080/press-logos");
      const logos = await response.json();

      return {
        type: ActionType.FETCH_PRESS_LIST,
        payload: {
          logos,
        },
      };
    } catch (error) {
      alert("언론사 리스트를 가져오는데 실패했습니다. 새로고침 하시기 바랍니다.");
    }
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

  allPressTabClick(): Action {
    return { type: ActionType.ALL_PRESS_TAB_CLICK };
  },

  subscribedPressTabClick(): Action {
    return { type: ActionType.SUBSCRIBED_PRESS_TAB_CLICK };
  },
};
