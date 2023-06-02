// import { UPDATE_NAME } from "../constants/ActionTypes";
import { State } from "../store/store";

type Action = { type: string; payload?: any };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // case UPDATE_NAME:
    // return { ...state, name: action.payload };
    // Handle other actions...
    default:
      return state;
  }
};
