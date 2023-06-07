import Dispatcher from './Dispatcher';

export class ReduceStore<TState> {
  private dispatcher: Dispatcher<any>;
  private state: TState;

  constructor(dispatcher: Dispatcher<object>) {
    this.dispatcher = dispatcher;
    this.state = this.getInitialState();
  }

  getState(): TState {
    return this.state;
  }

  getInitialState(): TState {}

  reduce(state: TState, action: Object): TState {}
}
