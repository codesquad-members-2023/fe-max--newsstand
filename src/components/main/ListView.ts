import { createElement } from '../../utils/domUtils';
import { FieldTab } from './FieldTab';
import style from './ListView.module.css';
import { PressNews } from './PressNews';

export class ListView {
  public element;
  private fieldTab;
  private pressNews;

  constructor() {
    this.element = createElement('section', { class: style.list_view });
    this.fieldTab = new FieldTab();
    this.pressNews = new PressNews();
    
    this.element.append(this.fieldTab.element, this.pressNews.element);
  }
}
/*
<div class="list-view">
  <div class="list-view__field-tab">
    <div class="progress">
      <div class="fill"></div>
      <div class="text">종합/경제</div>
    </div>
    <div class="article">
      <div class="text">방송/통신</div>
    </div>
    <div class="article">
    <div class="text">IT</div>
    </div>
    <div class="article">
    <div class="text">영자지</div>
    </div>
    <div class="article">
      <div class="text">스포츠/연예</div>
    </div>
    <div class="article">
      <div class="text">매거진/전문지</div>
    </div>
    <div class="article">
      <div class="text">지역</div>
    </div>
  </div>
  <div class="list-view__press-news"></div>
</div>
<div class="snack">내가 구독한 언론사에 추가되었습니다.</div>
*/
