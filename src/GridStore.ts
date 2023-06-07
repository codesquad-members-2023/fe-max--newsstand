import Dispatcher from './flux/Dispatcher';
import { fetchData, shuffleArray } from './utils';

export class GridStore<TState> {
  private dispatcher: Dispatcher<any>;
  private state: TState;
  private observers: [];

  constructor(dispatcher: Dispatcher<object>) {
    this.dispatcher = dispatcher;
    this.state = {};
    this.observers = [];

    this.getInitialState();
    this.registerOnDispatcher();
  }

  async getInitialState() {
    const gridDataRaw = await fetchData('gridData');
    const gridData = shuffleArray(gridDataRaw);

    this.state = { newsData: gridData, currentPage: 1 };
    console.log(this.state);
  }

  registerOnDispatcher() {
    this.dispatcher.register(this.reduce);
  }

  reduce = (action) => {
    console.log(action);
    switch (action.type) {
      case 'Click_Arrow_Btn':
        if (action.direction === 'right') {
          this.state.currentPage += 1;
          this.emitChange();
          break;
        }
        if (action.direction === 'left') {
          this.state.currentPage -= 1;
          this.emitChange();
          break;
        }
    }
  };

  subscribe(observer) {
    this.observers.push(observer);
  }

  emitChange() {
    this.observers.forEach((obs) => {
      obs.update(this.state);
    });
  }
}
