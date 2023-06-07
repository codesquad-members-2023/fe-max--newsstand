import { RollingNewsData } from "./rollingNewsBarItem";

export interface RollingNewsProps {
  newsData: RollingNewsData[];
  rollingIndex: number;
}

type Callback = (props?: any) => void;

export class RollingNewsBarObservable {
  observers: Callback[] = [];

  subscribe(callback: Callback) {
    this.observers.push(callback);
  }

  unsubscribe(callback: Callback) {
    const index = this.observers.indexOf(callback);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(props?: RollingNewsProps) {
    this.observers.forEach((observer) => {
      observer(props);
    });
  }
}
