import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import outletSample from "../../../images/outlet-sample.svg";
import subscribe from "../../../images/subscribe.svg";
import thumbnailSample from "../../../images/thumbnail-sample.png";
import { Store } from "../../../core/Store";
import { INews } from "../../../interfaces/INews";
import { ITabData } from "../../../interfaces/ITabData";

const { div, a, p, img, span, ul, li, input, h3, figure, figcaption, button } =
  CreateFakeElementHelper;

export function AllList(): IFakeElement {
  return div({ id: "list" }, [
    ListTabs(),
    div({ class: "inner" }, [
      div({ class: "info" }, [
        h3([img({ src: outletSample, alt: "샘플" })]),
        p("2023.02.10. 18:27 편집"),
        input({ type: "image", src: subscribe, alt: "구독하기" }),
      ]),
      ListContent(),
    ]),
  ]);
}

export function ListContent(): IFakeElement {
  return div({ class: "content" }, [
    div({ class: "left" }, [
      figure({ class: "image" }, [
        img({ src: thumbnailSample, alt: "" }),
        figcaption("또 국민연금의 몽니…현대百 지주사 불발"),
      ]),
    ]),
    div({ class: "right" }, [
      ul([
        li([a({ href: "" }, '"위스키 사려고 이틀 전부터 줄 섰어요"')]),
        li([
          a(
            { href: "" },
            "'방시혁 제국'이냐 '카카오 왕국'이냐…K엔터 누가 거머쥘까"
          ),
        ]),
        li([
          a(
            { href: "" },
            "사용후핵연료 저장시설 포화…이대론 7년 뒤 원전 멈춘다"
          ),
        ]),
        li([
          a(
            { href: "" },
            '[단독] 원희룡 "해외건설 근로자 소득공제 월 500만원으로 상향할 것'
          ),
        ]),
        li([
          a(
            { href: "" },
            "태평양에는 우영우의 고래만 있는게 아니었다 [로비의 그림]"
          ),
        ]),
        li([
          a(
            { href: "" },
            "LG엔솔, 폴란드 자동차산업협회 가입…“유럽서 목소리 키운다”"
          ),
        ]),
      ]),
      p(
        { class: "caption" },
        "서울 경제신문 언론사에서 직접 편집한 뉴스입니다."
      ),
    ]),
  ]);
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
