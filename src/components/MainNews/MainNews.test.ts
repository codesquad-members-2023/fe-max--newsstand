import { describe, expect, it } from "vitest";
import MainNews from "./MainNews.ts";

describe("Main content view renders between grid-view and list-view", () => {
  it("When main content view is grid view, grid-view component is the one and only child", () => {
    const mainContentViewProps = { mainContentView: "grid-view" };

    const mainNews = new MainNews();
    mainNews.setProps(mainContentViewProps);

    const mainEl = mainNews?.shadowRoot?.querySelector("main");
    expect(mainEl?.children).toHaveLength(1);
    expect(mainEl?.firstChild?.nodeName).toBe("GRID-VIEW");
  });

  it("When main content view is list view, list-view component is the one and only child", () => {
    const mainContentViewProps = { mainContentView: "list-view" };

    const mainNews = new MainNews();
    mainNews.setProps(mainContentViewProps);

    const mainEl = mainNews?.shadowRoot?.querySelector("main");
    expect(mainEl?.children).toHaveLength(1);
    expect(mainEl?.firstChild?.nodeName).toBe("LIST-VIEW");
  });
});

describe("Content view buttons are active according to the main content view", () => {
  it("When main content view is grid view, only the grid-view button is active", () => {
    const mainContentViewProps = { mainContentView: "grid-view" };

    const mainNews = new MainNews();
    mainNews.setProps(mainContentViewProps);

    const contentViewBtnsWrapper = mainNews.shadowRoot?.querySelector(
      ".content-view-btns-wrapper"
    );
    const contentViewBtns = contentViewBtnsWrapper?.querySelectorAll("button");

    if (contentViewBtns) {
      const activeButtons = [...contentViewBtns].filter((btn) =>
        btn.classList.contains("is-active")
      );

      expect(activeButtons).toHaveLength(1);
      expect(activeButtons[0].id).toBe("grid-view");
    } else {
      throw Error("Content view buttons were not found");
    }
  });

  it("When main content view is list view, only the list-view button is active", () => {
    const mainContentViewProps = { mainContentView: "list-view" };

    const mainNews = new MainNews();
    mainNews.setProps(mainContentViewProps);

    const contentViewBtnsWrapper = mainNews.shadowRoot?.querySelector(
      ".content-view-btns-wrapper"
    );
    const contentViewBtns = contentViewBtnsWrapper?.querySelectorAll("button");

    if (contentViewBtns) {
      const activeButtons = [...contentViewBtns].filter((btn) =>
        btn.classList.contains("is-active")
      );

      expect(activeButtons).toHaveLength(1);
      expect(activeButtons[0].id).toBe("list-view");
    } else {
      throw Error("Content view buttons were not found");
    }
  });
});
