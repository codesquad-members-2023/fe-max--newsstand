import { fetchNewsData, invoke } from '@/store';
import { createElement } from '@utils/domUtils';
import style from '@components/main/listView/listView/ListView.module.css';

export default class Field {
  public readonly element = createElement('li', { class: [style.field_tab__item, 'font-body-sm'] });
  private link = createElement('a', { href: '#' });
  private counter = createElement('span');
  private news: NewsData | null = null;
  public animationId: number | null = null;

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
    });
  }

  updateView({
    field,
    news,
    viewer
  }: {
    field: FieldData;
    news: NewsData;
    viewer: 'gridView' | 'listView';
  }) {
    this.link.textContent = field.name;

    this.element.setAttribute('data-active', field.active.toString());
    this.counter.textContent = field.active ? `${news.order}/${news.categoryCount}` : '';
    if (field.active && this.news !== news) {
      this.cancelProgressBarAnimation();
      this.initProgressBarAnimation();
      this.news = news;
    }
    if (viewer !== 'listView' || !field.active) {
      this.cancelProgressBarAnimation();
      this.element.style.background = '';
    }
  }

  initProgressBarAnimation() {
    let start = performance.now();
    const DURATION = 3000;
    const step = () => {
      const now = performance.now();
      const elapsedTime = now - start;
      const percentage = (elapsedTime / DURATION) * 100;
      this.updateProgressBarColor(percentage);

      this.animationId = requestAnimationFrame(step);
      if (elapsedTime >= DURATION) {
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
    });
  }
}
