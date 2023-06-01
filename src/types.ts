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
      type: 'headlineRollerTick';
    };

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
