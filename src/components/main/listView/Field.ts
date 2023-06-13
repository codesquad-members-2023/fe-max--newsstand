import { fetchNewsData, invoke } from '../../../store';
import { createElement } from '../../../utils/domUtils';
import style from '../listView/ListView.module.css';

export class Field {
  public readonly element = createElement('li', { class: [style.field_tab__item, 'font-body-sm'] });
  private link = createElement('a', { href: '#' });
  private counter = createElement('span');
  private news: NewsData | null = null;
  private animationId: number | null = null;

  constructor() {
    this.element.append(this.link, this.counter);

    this.setEvent();
  }

  setEvent() {
    this.element.addEventListener('click', () => {
      const fieldName = this.link.textContent;
      if (fieldName) {
        fetchNewsData(0, fieldName);
      }
    })
  }

  updateView(field: FieldData, news: NewsData) {
    this.link.textContent = field.name;

    this.element.setAttribute('data-active', field.active.toString());
    this.counter.textContent = field.active ? `${news.order}/${news.categoryCount}` : '';
    if (field.active && this.news !== news) {
      this.cancelProgressBarAnimation();
      this.initProgressBarAnimation();
      this.news = news;
    }
    if (!field.active) {
      this.cancelProgressBarAnimation();
      this.element.style.background = '';
    }
  }

  initProgressBarAnimation() {
    let start = performance.now();
    const step = () => {
      const now = performance.now();
      const duration = 3000;
      const elapsedTime = now - start;
      const percentage = (elapsedTime / duration) * 100;
      this.updateProgressBarColor(percentage);

      this.animationId = requestAnimationFrame(step);
      if (elapsedTime >= duration) {
        this.moveToNextNews();
        start = performance.now();
      }
    };
    step();
  }

  updateProgressBarColor(percentage: number) {
    this.element.style.background = `linear-gradient(90deg, #4362D0 0%, #4362D0 ${percentage}%, #7890E7 ${percentage}%, #7890E7 100%)`;
  }

  cancelProgressBarAnimation() {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  moveToNextNews() {
    invoke({
      type: 'onClickRightArrow'
    })
  }
}
