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
