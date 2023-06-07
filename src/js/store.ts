import { State, Reducer, Action, Subscriber } from './type.ts';

const defaultState: State = {
  isAllPress: true,
  isGrid: true,
  gridIndex: 0,
};

export const createStore = (reducer: Reducer, defaultState: State) => {
  let state: State = defaultState;
  const subscribers: Subscriber[] = [];

  const getState = (): State => state;

  const dispatch = (action: Action) => {
    state = reducer(state, action);
    subscribers.forEach(subscriber => subscriber());
  };

  const subscribe = (subscriber: Subscriber) => {
    subscribers.push(subscriber);
  };

  return { getState, dispatch, subscribe };
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_GRID_VIEW':
      return { ...state, isGrid: true };
    case 'SET_LIST_VIEW':
      return { ...state, isGrid: false };
    case 'SELECT_ALL_PRESS':
      return { ...state, isAllPress: true };
    case 'SELECT_SUBSCRIBE_PRESS':
      return { ...state, isAllPress: false };
    case 'NEXT_GRID_PAGE':
      return { ...state, gridIndex: state.gridIndex + 1 };
    case 'PREV_GRID_PAGE':
      return { ...state, gridIndex: state.gridIndex - 1 };
    default:
      return state;
  }
}

export class Store {
  private state: State;
  private subscribed: Subscriber[];

  constructor() {
    this.state = {
      isAllPress: true,
      isGrid: true,
      gridIndex: 0,
    };
    this.subscribed = [];
  }

  getState(): State {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);

    this.notifySubscriber();
  }

  reducer(state: State, action: Action) {
    switch (action.type) {
      case 'SET_GRID_VIEW':
        return { ...state, isGrid: true };
      case 'SET_LIST_VIEW':
        return { ...state, isGrid: false };
      case 'SELECT_ALL_PRESS':
        return { ...state, isAllPress: true };
      case 'SELECT_SUBSCRIBE_PRESS':
        return { ...state, isAllPress: false };
      case 'NEXT_GRID_PAGE':
        return { ...state, gridIndex: state.gridIndex + 1 };
      case 'PREV_GRID_PAGE':
        return { ...state, gridIndex: state.gridIndex - 1 };
      default:
        return state;
    }
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribed.push(subscriber);
  }

  private notifySubscriber(): void {
    for (const subscriber of this.subscribed) {
      subscriber();
    }
  }
}

// const Dispatcher = (() => {
//   const listeners = [];

//   const subscribe = listener => {
//     listeners.push(listener);
//   };

//   const dispatch = action => {
//     listeners.forEach(listener => {
//       listener(action);
//     });
//   };

//   return {
//     subscribe,
//     dispatch,
//   };
// })();

// const Store = (() => {
//   let state = {
//     counter: 0,
//   };

//   const getState = () => state;

//   const handleAction = action => {
//     switch (action.type) {
//       case 'INCREMENT':
//         state = {
//           ...state,
//           counter: state.counter + 1,
//         };
//         break;
//       case 'DECREMENT':
//         state = {
//           ...state,
//           counter: state.counter - 1,
//         };
//         break;
//       default:
//         break;
//     }
//   };

//   Dispatcher.subscribe(handleAction);

//   return {
//     getState,
//   };
// })();

// const Actions = {
//   increment: () => {
//     Dispatcher.dispatch({ type: 'INCREMENT' });
//   },
//   decrement: () => {
//     Dispatcher.dispatch({ type: 'DECREMENT' });
//   },
// };

// const counterElement = document.getElementById('counter');

// const render = () => {
//   const state = Store.getState();
//   counterElement.innerText = state.counter.toString();
// };

// Store.subscribe(render);

// const incrementButton = document.getElementById('increment');
// incrementButton.addEventListener('click', Actions.increment);

// const decrementButton = document.getElementById('decrement');
// decrementButton.addEventListener('click', Actions.decrement);

// // 초기 렌더링
// render();

// function dispatch(action: Action): void {
//   newstate = this.reducer(this.state, action);

//   this.notifySubscriber();
// }
