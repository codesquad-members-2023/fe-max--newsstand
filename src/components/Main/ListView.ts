import { Component } from '../../Component';

export class ListView extends Component {
  categoryTab: HTMLDivElement;

  constructor(props) {
    super(props);
    this.render();
    this.setEvent();
    this.mount();
  }

  render(): void {
    this.element = document.createElement('div');
    this.element.classList.add('list-container');

    this.renderCategoryTab();
    this.renderPressNews();
  }

  mount(): void {
    this.element.append(this.categoryTab);
  }

  renderCategoryTab() {
    const categorys = ['종합/경제', '방송/통신', 'IT', '영자지', '스포츠/연예', '매거진/전문지', '지역'];
    this.categoryTab = document.createElement('div');
    this.categoryTab.classList.add('category-tab');

    for (let i = 0; i <= 6; i++) {
      const categoryBtn = document.createElement('button');
      categoryBtn.classList.add('category-btn');

      const categoryName = document.createElement('span');
      categoryName.classList.add('category-name');
      categoryName.textContent = `${categorys[i]}`;

      const categoryNum = document.createElement('span');
      categoryNum.classList.add('category-num');
      categoryNum.textContent = '1/81';

      categoryBtn.append(categoryName, categoryNum);
      this.categoryTab.append(categoryBtn);
    }
  }
  renderPressNews() {}
}
