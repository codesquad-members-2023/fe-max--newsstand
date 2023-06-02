import { Header } from './Header';
import { RollingSection } from './RollingSection';
import { Main } from './Main';
import { OneLineNews, GridNewsData, ListNewsData } from '../types.ts';

export class NewsStand {
  element: HTMLElement;
  header: Header;
  rollingSection: RollingSection;
  main: Main;

  constructor({
    systemDate,
    oneLineNews,
    gridData,
    listData,
  }: {
    systemDate: Date;
    oneLineNews: OneLineNews[];
    gridData: GridNewsData[];
    listData: ListNewsData[];
  }) {
    this.element = document.createElement('div');
    this.element.id = 'newsStand';

    this.header = new Header(systemDate);
    this.rollingSection = new RollingSection(oneLineNews);
    this.main = new Main({ gridData: gridData, listData: listData });

    this.element.append(this.header.element, this.rollingSection.element, this.main.element);
  }
}
