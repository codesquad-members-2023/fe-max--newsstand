import { describe, expect, it } from 'vitest';
import { MainHeader, MainHeaderProps } from '../components/main/MainHeader';
import style from '../components/main/MainHeader.module.css';

describe('MainHeader updateView Method Test', () => {
  describe('mainViewerInfo.targetMedia가 total일 경우에 mainViewerInfo.viewer 값에 따라 아이콘이 활성화된다.', () => {
    const initialState: MainHeaderProps = {
      mainViewerInfo: {
        targetMedia: 'total',
        viewer: 'gridView'
      }
    };

    it('mainViewerInfo.viewer 값이 listView 일 경우 리스트뷰 아이콘이 활성화된다.', () => {
      const mainHeader = new MainHeader(initialState);
      const state: MainHeaderProps = {
        mainViewerInfo: {
          targetMedia: 'total',
          viewer: 'listView'
        }
      };

      mainHeader.updateView(state);
      const listViewIcon = mainHeader.element.querySelector('[data-viewer="listView"]');

      expect(listViewIcon?.classList.contains(style.active_viewer!)).toBe(true);
    });

    it('mainViewerInfo.viewer 값이 gridView 일 경우 그리드뷰 아이콘이 활성화된다.', () => {
      const mainHeader = new MainHeader(initialState);
      const state: MainHeaderProps = {
        mainViewerInfo: {
          targetMedia: 'total',
          viewer: 'gridView'
        }
      };

      mainHeader.updateView(state);
      const gridViewIcon = mainHeader.element.querySelector('[data-viewer="gridView"]');

      expect(gridViewIcon?.classList.contains(style.active_viewer!)).toBe(true);
    });
  });
});
