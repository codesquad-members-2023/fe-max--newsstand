import NewsStandDispatcher from './NewsStandDispatcher';
import { ReduceStore } from './flux/ReduceStore';

export class GridStore extends ReduceStore {
  constructor() {
    super(NewsStandDispatcher);
  }

  getInitialState() {
    return { currentPage: 1 };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'Click_Next_Btn':
        // add some logic
        return this.state;
    }
  }
}
