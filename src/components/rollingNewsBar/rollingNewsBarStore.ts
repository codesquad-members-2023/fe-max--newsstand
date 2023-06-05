import { RollingNewsBarObservable, RollingNewsProps } from "./rollingNewsBarObservable";
import { RollingNewsData } from "./rollingNewsBarItem";

export class RollingNewsBarStore extends RollingNewsBarObservable {
  newsData: RollingNewsData[] = [];
  rollingIndex: number = 0;
  intervalId: number | null = null;

  constructor() {
    super();
  }

  setNewsData(data: RollingNewsData[]) {
    this.newsData = data;

    const props = {
      newsData: this.newsData,
      rollingIndex: this.rollingIndex,
    };

    this.notify(props);
  }

  increaseRollingIndex() {
    this.rollingIndex += 1;

    if (this.rollingIndex >= this.newsData.length) {
      this.rollingIndex = 0;
    }

    const props = {
      newsData: this.newsData,
      rollingIndex: this.rollingIndex,
    };

    this.notify(props);
  }
}
