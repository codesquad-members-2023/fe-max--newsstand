export type THeadlineData = {
  pressName: string;
  headline: string;
};

export type TGridViewData = {
  src: string;
  alt: string;
};

export type TListViewData = {
  categoryName: string;
  pressList: {
    pressLogoSrc: string;
    pressLogoAlt: string;
    lastEditted: string;
    mainArticle: {
      thumbnailSrc: string;
      thumbnailAlt: string;
      mainArticleTitle: string;
    };
    subArticles: string[];
  }[];
};

export type TListViewProps = {
  listViewData: TListViewData[];
  listViewCurrCategoryIdx: number;
  listViewCurrArticleIdx: number;
};
