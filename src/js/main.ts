import fetchedData from '../../db.json';
import { systemDate } from './utils.ts';
import { createStore } from './store.ts';
import { GridView } from './components/gridView.ts';
import { Header } from './components/header.ts';
import { RollingNews } from './components/rollingNews.ts';
import { Tapview } from './components/tapview.ts';
import { MainContents } from './components/mainContents.ts';
import { ListView } from './components/listView.ts';

const store = createStore;

const init = () => {
  const header = new Header(HeaderProps);
  const rollingNews = new RollingNews(RollingNewsProps);
  const tapview = new Tapview(TapviewProps);
  const mainContents = new MainContents(MainContentsProps);
  const gridView = new GridView(GridProps);
  const listView = new ListView(ListProps);
};

window.addEventListener('DOMContentLoaded', init);

const HeaderProps = {
  title: '뉴스스탠드',
  date: `${systemDate}`,
};

const RollingNewsProps = {
  leftPress: '연합뉴스',
  rightPress: '연합뉴스',
  leftArticle: '뉴스기사',
  rightArticle: '뉴스기사',
};

const TapviewProps = {
  allBtn: '전체 언론사',
  subscribeBtn: '내가 구독한 언론사',
};

const GridProps = {
  pressList: [...fetchedData.pressList],
};

const MainContentsProps = {
  prevBtnImg: './src/asset/icon/LeftButton.svg',
  nextBtnImg: './src/asset/icon/RightButton.svg',
};

const ListProps = {
  category: ['종합/경제', '방송/통신', 'IT', '영자지', '스포츠/연예', '매거진/전문지', '지역'],
  newsList: fetchedData.newsList[0].list,
};
