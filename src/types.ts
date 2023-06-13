type Action =
  | {
      type: 'moveToNextGridPage';
    }
  | {
      type: 'moveToPrevGridPage';
    }
  | {
      type: 'turnOnSubscriptionCover';
      payload: {
        hoverOnGrid: boolean;
        hoveredCellIndex: number;
      };
    }
  | {
      type: 'turnOffSubscriptionCover';
      payload: {
        hoverOnGrid: boolean;
      };
    }
  | {
      type: 'initGridImages';
      payload: {
        images: GridImg[];
      };
    }
  | {
      type: 'initHeadlineNews';
      payload: {
        news: HeadlineNews[];
      };
    }
  | {
      type: 'updateSubscribedMedia';
      payload: {
        id: number;
        mode: 'add' | 'remove';
      };
    }
  | {
      type: 'initNewsData';
      payload: {
        news: NewsData | null;
      };
    }
  | {
      type: 'initFieldData';
      payload: {
        fields: string[];
      };
    }
  | {
      type: 'onClickLeftArrow';
    }
  | {
      type: 'onClickRightArrow';
    }
    | {
      type: 'moveToOtherField';
      payload: {
        news: NewsData | null;
      };
    }

type GridImg = {
  id: number;
  src: string;
  alt: string;
};

type GridInfo = {
  imgs: GridImg[];
  page: number;
  isHover: boolean;
  hoverIndex: number;
};

type HeadlineNews = {
  media: string;
  mediaUrl: string;
  news: string;
  newsUrl: string;
};

type HeadlineInfo = {
  news: HeadlineNews[];
  leftIndex: number;
  rightIndex: number;
};

type NewsData = {
  mediaInfo: MediaInfo;
  mainContent: {
    imgSrc: string;
    imgAlt: string;
    url: string;
  };
  subContent: {
    title: string;
    url: string;
  }[];
  category: string;
  index: number,
  order: number;
  categoryCount: number;
  totalCount: number;
};

type MediaInfo = {
  url: string;
  imgSrc: string;
  imgAlt: string;
  editInfo: string;
};

type FieldData = {
  name: string;
  active: boolean;
};
