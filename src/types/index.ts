export type THeadlineData = {
  pressName: string;
  headline: string;
};

export type TGridViewDataItem = {
  src: string;
  alt: string;
};

export type TListViewDataItem = {
  categoryName: string;
  pressList: TPressListItem[];
};

export type TPressListItem = {
  pressLogoSrc: string;
  pressLogoAlt: string;
  lastEditted: string;
  mainArticle: {
    thumbnailSrc: string;
    thumbnailAlt: string;
    mainArticleTitle: string;
  };
  subArticles: string[];
};

export type TListViewProps = {
  listViewData: TListViewDataItem[];
  listViewCurrCategoryIdx: number;
  listViewCurrArticleIdx: number;
};
