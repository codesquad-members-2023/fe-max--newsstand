import { State, List } from '../../../common/types';
import { $, $$, render } from '../../../common/util';
import { dispatch } from '../../../dispatch';
import { ACTION } from '../../../actions';
import { store } from '../../../store';

export function initList(state: State) {
  renderList(state.list);
  observeListFn();
}

function setEvent() {
  const categories = $$('.category__item');
  const leftBtn = $('.prev__list');
  const rightBtn = $('.next__list');

  let autoNextList = setInterval(() => {
    dispatch({ type: ACTION.GO_TO_NEXT_LIST });
  }, 5000);

  function resetInterval() {
    clearInterval(autoNextList);
    autoNextList = setInterval(() => {
      dispatch({ type: ACTION.GO_TO_NEXT_LIST });
    }, 5000);
  }

  categories.forEach((category) => {
    category.addEventListener('click', () => {
      dispatch({ type: ACTION.CLICK_CATEGORY, payload: category.firstElementChild?.textContent });
      resetInterval();
    });
  });

  leftBtn.addEventListener('click', () => {
    dispatch({ type: ACTION.GO_TO_PREV_LIST });
    resetInterval();
  });

  rightBtn.addEventListener('click', () => {
    dispatch({ type: ACTION.GO_TO_NEXT_LIST });
    resetInterval();
  });
}

function setAllList(state: List) {
  return `
    <div class="press__list">
      <img class="prev__list" src="./asset/symbol/leftButton.svg" alt="<" />
      <div class="list__wrapper">
        <div class="category__tab">
          ${setCategoryItem(state)}
        </div>
        <div class="list__content">
          <div class="press__info">
            <img class="press__info__img" src="" alt="" />
            <div class="press__info__date"></div>
            <img class="press__info__toggle" src="./asset/symbol/subscribe.svg" alt="subscribe" />
          </div>
          <div class="article__container">
            <div class="main__article">
              <img class="main__article__img" src="" alt="" />
              <div class="main__article__title"></div>
            </div>
            <div class="sub__article">
              ${setSubArticle(state)}
              <div class="editor__info"></div>
            </div>
          </div>
        </div>
      </div>
      <img class="next__list" src="./asset/symbol/rightButton.svg" alt=">" />
    </div>
  `;
}

export function getCategory(state: List) {
  const categoryList = state.allList.map((value) => value.title);
  const fiteredList = [...new Set(categoryList)];
  return fiteredList;
}

function setCategoryItem(state: List) {
  const categoryItems = [];
  for (let i = 0; i < getCategory(state).length; i++) {
    categoryItems.push(`
      <div class="category__item">
        <span class="category">${getCategory(state)[i]}</span>
      </div>
    `);
  }
  return categoryItems.join('');
}

function displayCurCategory(state: List) {
  const categories = $$('.category__item');
  const curCategory = categories[state.categoryIndex];

  if (curCategory.childElementCount === 1) {
    const newCount = document.createElement('span');
    newCount.className = 'count';
    newCount.textContent = `${state.curCategoryIndex + 1} / ${state.curCategoryList[0].pressList.length}`;

    curCategory.appendChild(newCount);
  }

  curCategory.querySelector('.progress__bar')?.remove();

  const newProgressBar = document.createElement('div');
  newProgressBar.className = 'progress__bar';

  curCategory.appendChild(newProgressBar);

  categories.forEach((category, index) => {
    category.classList.remove('current');

    if (index !== state.categoryIndex) {
      category.querySelector('.progress__bar')?.remove();
      category.querySelector('.count')?.remove();
    }
  });

  curCategory.classList.add('current');
  $('.count').textContent = `
    ${state.curCategoryIndex + 1} / ${state.curCategoryList[0].pressList.length}
  `;
}

function setPressInfo(state: List) {
  const pressImg = $('.press__info__img');
  const pressDate = $('.press__info__date');

  pressImg.setAttribute('src', getCurItem(state).pressLogoSrc);
  pressImg.setAttribute('alt', getCurItem(state).pressLogoAlt);
  pressDate.textContent = getCurItem(state).lastEditted;
}

function setMainArticle(state: List) {
  const articleImg = $('.main__article__img');
  const articleTitle = $('.main__article__title');

  articleImg.setAttribute('src', getCurItem(state).mainArticle.thumbnailSrc);
  articleImg.setAttribute('alt', getCurItem(state).mainArticle.thumbnailAlt);
  articleTitle.textContent = getCurItem(state).mainArticle.mainArticleTitle;
}

function setSubArticle(state: List) {
  const subArticle = [];

  for (let i = 0; i < getCurItem(state).subArticles.length; i++) {
    subArticle.push(`
      <div class="sub__article__item"></div>
    `);
  }
  return subArticle.join('');
}

function setSubArticleContent(state: List) {
  const subArticles = $$('.sub__article__item');

  subArticles.forEach((subArticle, index) => {
    subArticle.textContent = getCurItem(state).subArticles[index];
  });
}

function setEditorInfo(state: List) {
  const editorInfo = $('.editor__info');

  editorInfo.textContent = `${getCurItem(state).pressLogoAlt} 언론사에서 직접 편집한 뉴스입니다.`;
}

function getCurItem(state: List) {
  return state.allList[state.categoryIndex].pressList[state.curCategoryIndex];
}

function renderList(state: List) {
  render($('.main__wrapper'), setAllList(state));

  setPressInfo(state);
  setMainArticle(state);
  setSubArticleContent(state);
  setEditorInfo(state);
  displayCurCategory(state);
  setEvent();
}

function observeListFn() {
  store.subscribe('list', setPressInfo);
  store.subscribe('list', setMainArticle);
  store.subscribe('list', setSubArticleContent);
  store.subscribe('list', setEditorInfo);
  store.subscribe('list', displayCurCategory);
}

export function ignoreListFn() {
  store.unsubscribe('list', setPressInfo);
  store.unsubscribe('list', setMainArticle);
  store.unsubscribe('list', setSubArticleContent);
  store.unsubscribe('list', setEditorInfo);
  store.unsubscribe('list', displayCurCategory);
}
