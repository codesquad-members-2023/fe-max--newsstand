import { invoke } from '@/store';

const subscribers: Function[] = [];

export const subscribe = (
  subscriber: (state: {
    dateInfo: Date;
    gridInfo: GridInfo;
    subscriptionInfo: string[];
    mainViewerInfo: {
      targetMedia: 'total' | 'subscribed';
      viewer: 'listView' | 'gridView';
    };
    news: NewsData | null;
    fields: FieldData[];
    listIndex: number;
    arrowInfo: {
      left: boolean;
      right: boolean;
    };
  }) => void
) => {
  subscribers.push(subscriber);
};

export const dispatch = (action: Action) => {
  const state = invoke(action);
  if (state) {
    subscribers.forEach((subscriber) => subscriber(state));
  }
};
