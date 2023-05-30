import listData from '../../../../server/list.json';

// 언론사 총 개수 = gridData.length = 246개
// 총 페이지 수 = Math.ceil(언론사 총 개수 / 24) = 총 11개
// 현재 페이지
// 구독한 언론사 개수
// 구독한 언론사 페이지 수 = Math.ceil(언론사 총 개수 / 24)
// 첫 페이지 or 마지막 페이지 일 떄 버튼 숨기기

// 구독한 언론사는 리스트 보기와 그리드에서 공유해야함
// src = mediaInfo.imgSrc
// alt = mediaInfo.imgAlt

function getListData() {
  return listData;
}

export { getListData };
