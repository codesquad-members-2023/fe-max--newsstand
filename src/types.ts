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
