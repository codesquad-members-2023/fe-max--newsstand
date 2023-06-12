import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
// import ThumbNailSample from "../../../images/thumbnail-sample.png";

export function ListContent(): IFakeElement {
  const { div, figure, img, figcaption, ul, li, a, p } =
    CreateFakeElementHelper;

  return div({ class: "content" }, [
    div({ class: "left" }, [
      figure({ class: "image" }, [
        img({ src: "", alt: "" }),
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
