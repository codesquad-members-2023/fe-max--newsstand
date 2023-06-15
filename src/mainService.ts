export default class MainService {
  targetEl;
  dataList;
  foo = '';

  constructor({ targetEl }: any) {
    this.targetEl = targetEl;
    this.dataList = '';
  }

  init(dataList: any[]) {
    this.dataList = dataList.flat(2).join('');
    return this.render(this.dataList);
  }

  render(data: any) {
    return `<span>${data}</span>`;
  }
}
