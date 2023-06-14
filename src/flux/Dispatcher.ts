import { Action } from '../utils/types';

export class Dispatcher<TPayload> {
  private callbacks: ((payload: TPayload) => void)[];

  constructor() {
    this.callbacks = [];
  }

  register(callback: (payload: TPayload) => void) {
    this.callbacks.push(callback);
  }

  dispatch(payload: TPayload) {
    this.callbacks.forEach((callback) => {
      callback(payload);
    });
  }
}

export default new Dispatcher<Action>();

// import dispatcher from '../flux/Dispatcher';
// import type { Dispatcher } from '../flux/Dispatcher';
// import type { GridView } from '../components/GridView';
// import { fetchData, shuffleArray } from '../utils/utils';
// import { Action, GridNewsData } from '../utils/types';

// export type GridState = {
//   newsData: GridNewsData[];
//   currentPage: number;
//   targetCell: HTMLElement;
//   displayCell: string;
//   subscriptionList: string[];
// };

// const setInitialData = async () => {
//   const gridDataRaw = await fetchData('gridData');
//   const gridData = shuffleArray(gridDataRaw);

//   return { newsData: gridData, currentPage: 1, targetCell: {}, subscriptionList: [] };
// };
// class GridStore<TState> {
//   private dispatcher: Dispatcher<any>;
//   private state: TState;
//   private observers: GridView[];

//   constructor(state: TState, dispatcher: Dispatcher<object>) {
//     this.dispatcher = dispatcher;
//     this.state = state;
//     this.observers = [];

//     this.registerOnDispatcher();
//   }

//   registerOnDispatcher() {
//     this.dispatcher.register((action: Action) => {
//       this.reduce(this.state, action);
//     });
//   }

//   reduce = (state: TState, action: Action) => {
//     switch (action.type) {
//       case 'Click_Arrow_Btn':
//         if (action.direction === 'right') {
//           state.currentPage += 1;
//           this.emitChange();
//           break;
//         }

//         if (action.direction === 'left') {
//           state.currentPage -= 1;
//           this.emitChange();
//           break;
//         }

//         break;

//       case 'Handle_Sub_Btn':
//         const pressName = action.target.children[0].alt;

//         if (!state.subscriptionList.includes(pressName)) {
//           state.targetCell = action.target;
//           if (action.display === 'show') {
//             state.displayCell = 'show';
//             this.emitChange();
//             break;
//           }
//           if (action.display === 'hide') {
//             state.displayCell = 'hide';
//             this.emitChange();
//             break;
//           }
//         }
//         break;

//       default:
//         return;
//     }
//   };

//   subscribe(observer: GridView) {
//     this.observers.push(observer);
//   }

//   emitChange() {
//     this.observers.forEach((obs) => {
//       obs.update(this.state);
//     });
//   }
// }

// const initialState = await setInitialData();
// const gridStore = new GridStore<GridState>(initialState, dispatcher);
// export default gridStore;
