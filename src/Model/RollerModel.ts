// import db from "../services/db.json";

type RollerState = {
  [key: string]: string | number | boolean | object | null;
};
export class RollerModel {
  state: RollerState;
  constructor() {
    this.state = {};
    this.initState();
  }

  async initState() {
    const response = await fetch("/src/services/db.json");
    const data = await response.json();

    this.state.headlines = data.headlines;
  }

  getState() {
    return this.state;
  }
  
}

// dispatch(action: Action): void {
//   const newState = this.reduce(this.state, action);
//   for (const key in newState) {
//     if (newState.hasOwnProperty(key)) {
//       const stateKey = key as keyof State;
//       this.state[stateKey] = newState[stateKey];
//     }
//   }
// }
