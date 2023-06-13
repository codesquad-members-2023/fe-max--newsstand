import { Reducer } from "./../Reducer";
import { Action, newsStandState } from "./../utils/types";
import { mockState } from "./mockState";
import { Header } from "./../component/Header";
const reducer = new Reducer();
const ITEM_PER_PAGE = 24;

describe("Header test", () => {
  it("kr 포맷에 맞게 리턴한다", async () => {
    const mockDate = new Date("2023.06.12");
    const header = new Header(mockState);

    expect(header.getDate(mockDate)).toBe("2023. 06. 12. 월요일");
  });
});

describe("tick test", () => {
  const newsStandState: newsStandState = JSON.parse(JSON.stringify(mockState));
  const action: Action = { type: "INCREMENT_TICK" };

  it("tick이 1 증가", () => {
    const newState = reducer.reduce(newsStandState, action);

    expect(newState.rollerTick).toBe(newsStandState.rollerTick + 1);
  });

  it("왼쪽 롤링", () => {
    newsStandState.rollerTick = 4;
    const newState = reducer.reduce(newsStandState, action);
    const result = [
      newState.leftRoller.headlineList[1],
      newState.leftRoller.headlineList[2],
    ];

    expect(newState.leftRoller.headline).toEqual(result);
    expect(newState.leftRoller.index).toBe(1);
  });

  it("왼쪽 무한 롤링", () => {
    newsStandState.rollerTick = 4;
    newsStandState.leftRoller.index = 3;
    newsStandState.leftRoller.headline = [
      newsStandState.leftRoller.headlineList[3],
      newsStandState.leftRoller.headlineList[4],
    ];

    const newState = reducer.reduce(newsStandState, action);
    const result = [
      newState.leftRoller.headlineList[4],
      newState.leftRoller.headlineList[0],
    ];

    expect(newState.leftRoller.headline).toEqual(result);
  });

  it("왼쪽 롤링 멈춤", () => {
    newsStandState.rollerTick = 4;
    newsStandState.leftRoller.isMove = false;

    const currentHeadline = newsStandState.leftRoller.headline;
    const newState = reducer.reduce(newsStandState, action);

    expect(newState.leftRoller.headline).toEqual(currentHeadline);
  });

  it("오른쪽 롤링", () => {
    newsStandState.rollerTick = 5;
    const newState = reducer.reduce(newsStandState, action);
    const result = [
      newState.rightRoller.headlineList[1],
      newState.rightRoller.headlineList[2],
    ];

    expect(newState.rightRoller.headline).toEqual(result);
  });

  it("오른쪽 무한 롤링", () => {
    newsStandState.rollerTick = 5;
    newsStandState.rightRoller.index = 3;
    newsStandState.rightRoller.headline = [
      newsStandState.rightRoller.headlineList[3],
      newsStandState.rightRoller.headlineList[4],
    ];

    const newState = reducer.reduce(newsStandState, action);
    const result = [
      newState.rightRoller.headlineList[4],
      newState.rightRoller.headlineList[0],
    ];

    expect(newState.rightRoller.headline).toEqual(result);
  });

  it("오른쪽 롤링 멈춤", () => {
    newsStandState.rollerTick = 5;
    newsStandState.rightRoller.isMove = false;

    const currentHeadline = newsStandState.rightRoller.headline;
    const newState = reducer.reduce(newsStandState, action);

    expect(newState.rightRoller.headline).toEqual(currentHeadline);
  });
});

describe("toggle Roller test", () => {
  const newsStandState: newsStandState = JSON.parse(JSON.stringify(mockState));

  it("왼쪽 isMove toggle", () => {
    const action: Action = { type: "TOGGLE_ROLLING_STATE", target: "left" };
    let newState = reducer.reduce(newsStandState, action);

    expect(newState.leftRoller.isMove).toBe(false);
    newState = reducer.reduce(newState, action);

    expect(newState.leftRoller.isMove).toBe(true);
  });

  it("오른쪽 isMove toggle", () => {
    const action: Action = { type: "TOGGLE_ROLLING_STATE", target: "right" };
    let newState = reducer.reduce(newsStandState, action);

    expect(newState.rightRoller.isMove).toBe(false);
    newState = reducer.reduce(newState, action);

    expect(newState.rightRoller.isMove).toBe(true);
  });
});

describe("change page test", () => {
  const newsStandState: newsStandState = JSON.parse(JSON.stringify(mockState));

  it("page 증가 & currentViewList", () => {
    const action: Action = { type: "INCREMENT_PAGE" };
    newsStandState.currentPage = 1;
    let newState = reducer.reduce(newsStandState, action);

    expect(newState.currentPage).toBe(newsStandState.currentPage + 1);
    expect(newState.grid.currentViewList).toEqual(
      newState.grid.gridAllList.slice(
        newState.currentPage * ITEM_PER_PAGE,
        newState.currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE
      )
    );

    newsStandState.currentPage = 3;
    newState = reducer.reduce(newsStandState, action);

    expect(newState.currentPage).toBe(newsStandState.currentPage + 1);
    expect(newState.grid.currentViewList).toEqual(
      newState.grid.gridAllList.slice(
        newState.currentPage * ITEM_PER_PAGE,
        newState.currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE
      )
    );
  });

  it("page 감소 & currentViewList", () => {
    const action: Action = { type: "DECREMENT_PAGE" };
    newsStandState.currentPage = 1;
    let newState = reducer.reduce(newsStandState, action);

    expect(newState.currentPage).toBe(newsStandState.currentPage - 1);
    expect(newState.grid.currentViewList).toEqual(
      newState.grid.gridAllList.slice(
        newState.currentPage * ITEM_PER_PAGE,
        newState.currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE
      )
    );

    newsStandState.currentPage = 3;
    newState = reducer.reduce(newsStandState, action);

    expect(newState.currentPage).toBe(newsStandState.currentPage - 1);
    expect(newState.grid.currentViewList).toEqual(
      newState.grid.gridAllList.slice(
        newState.currentPage * ITEM_PER_PAGE,
        newState.currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE
      )
    );
  });
});

describe("update page test", () => {
  const newsStandState: newsStandState = JSON.parse(JSON.stringify(mockState));

  it("page 변경 & currentViewList 변경", () => {
    const page = 2;
    const action: Action = { type: "UPDATE_PAGE", page: page };
    const newState = reducer.reduce(newsStandState, action);

    expect(newState.currentPage).toBe(page);
    expect(newState.list.currentViewList).toBe(
      newState.list.currentTypeList[page]
    );
  });
});

