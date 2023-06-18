import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { Store } from "../../../core/Store";
import { INews } from "../../../interfaces/INews";
import { ITabData } from "../../../interfaces/ITabData";
import { useContext } from "../../../hooks/useContext";
import { setTrimmedBackgroundImageUrl } from "../../../utils/setTrimmedBackgroundImageUrl";
import { Dispatcher } from "../../../core/Dispatcher";
import outletSample from "../../../images/outlet-sample.svg";
import subscribe from "../../../images/subscribe.svg";
import unsubscribe from "../../../images/unsubscribe.svg";
import thumbnailSample from "../../../images/thumbnail-sample.png";
import { IPress } from "../../../interfaces/IPress";
import { IArticle } from "../../../interfaces/IArticle";

const {
  div,
  a,
  p,
  img,
  span,
  ul,
  li,
  input,
  h3,
  figure,
  figcaption,
  button,
  strong,
} = CreateFakeElementHelper;

export function AllList(): IFakeElement {
  return div({ id: "list" }, [
    ListTabs(),
    div({ class: "inner" }, [
      div({ class: "info" }, [
        h3([
          img(function (this: IFakeElement, element: HTMLElement) {
            const { mark, name } = getListData();
            setTrimmedBackgroundImageUrl(element, mark);
            element.setAttribute("alt", name);
          }),
        ]),
        p("2023.02.10. 18:27 편집"),
        input(function (this: IFakeElement, element: HTMLElement) {
          const press = getListData();
          if (Store.state.listIndex >= Store.state.mainPress.length) {
            element.className = "blind";
            return;
          }
          const { name } = press;
          element.setAttribute("type", "image");

          this.props = {
            onClick: function () {
              subscribePress(name);
              if (isSubscribe(name)) {
                element.setAttribute("src", subscribe);
                return;
              }
              element.setAttribute("src", unsubscribe);
            },
          };

          if (isSubscribe(name)) {
            element.setAttribute("src", subscribe);
            return;
          }
          element.setAttribute("src", unsubscribe);
        }),
      ]),
      ListContent(),
    ]),
  ]);
}

export function ListContent(): IFakeElement {
  return div({ class: "content" }, [
    div({ class: "left" }, [
      figure(
        function (this: IFakeElement, element: HTMLElement) {
          const press = getListData();
          const { articles } = press;
          const hasImgArticles = articles.filter((article) => article.hasImg);
          const randomIndex = Math.floor(Math.random() * hasImgArticles.length);
          const selectedArticle = hasImgArticles[randomIndex];
          this.children = [
            a({ href: selectedArticle.link }, [
              img({ src: selectedArticle.img, alt: "" }),
              strong({ ariaHidden: "true" }, selectedArticle.content),
            ]),
            figcaption({ class: "blind" }, selectedArticle.content),
          ];
        },
        { class: "image" }
      ),
    ]),
    div({ class: "right" }, [
      ul(function (this: IFakeElement) {
        const press = getListData();
        const { articles } = press;
        this.children = articles
          .filter((article) => !article.hasImg)
          .slice(0, 6)
          .map(Article);
      }),
      p(
        function (this: IFakeElement, element: HTMLElement) {
          const { name } = getListData();
          element.textContent = `${name} 언론사에서 직접 편집한 뉴스입니다.`;
        },
        { class: "caption" }
      ),
    ]),
  ]);
}

function Article({ link, content }: IArticle): IFakeElement {
  return li([a({ href: link }, content)]);
}

export function ListTabs(): IFakeElement {
  const { ul } = CreateFakeElementHelper;
  const news = getNews();
  const tabDataArray = Object.keys(news).map((category: string) => {
    const tabData: ITabData = {
      name: category,
      index: 0,
      limit: news[category].length,
    };

    return tabData;
  });
  return ul({ class: "tabs" }, tabDataArray.map(ListTab));
}

export function ListTab({ name, index, limit }: ITabData): IFakeElement {
  return li({ class: "tab" }, [
    div({ class: "progress-bar" }, [
      div({
        class: "fill",
        style: `--index: ${index + 1}; --total-count: ${limit}`,
        dataIndex: index.toString(),
        dataTotalCount: limit.toString(),
      }),
    ]),
    button({ class: "category", href: "" }, [
      span({ class: "name" }, name),
      span({ class: "fraction" }, `${index + 1} / ${limit}`),
    ]),
  ]);
}

function getNews(): INews {
  return Store.state.news;
}

function getListData(): IPress {
  const index = Store.state.listIndex;
  return Store.state.pressArr[index];
}

function isSubscribe(name: string): boolean {
  return Store.state.subscribePress[name];
}

function subscribePress(name: string): void {
  Dispatcher.onAction({ type: "subscribe", payload: name });
}
