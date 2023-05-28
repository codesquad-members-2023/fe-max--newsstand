type RollingDataType = {
  media: string;
  title: string;
  link: string;
};

type RollingDataState = {
  data: RollingDataType[];
  state: string;
  currentIndex: number;
};

type StoreType = {
  right: RollingDataState;
  left: RollingDataState;
};

