import { rollerActions } from "../../actions/NewsRoller/NewsRollerActions";
import { AppDispatcher } from "../../dispatcher/AppDispatcher";
import { NewsRollerStore } from "../../stores/NewsRollerStore";

export class NewsRoller {
  app: HTMLElement | null;
  newsRoller: HTMLElement | null;
  containerLeft: HTMLElement | null;
  containerRight: HTMLElement | null;

  constructor() {
    this.app = document.querySelector("#app");
    this.newsRoller = this.createNewsRoller();
    this.containerLeft = document.querySelector(".headline-container-left");
    this.containerRight = document.querySelector(".headline-container-right");
    this.setEvent();

    NewsRollerStore.register(() => this.render());
    // NewsRollerStore.register(() => this.leftRolling());
    // NewsRollerStore.register(() => this.rightRolling());
  }

  // leftRolling() {
  //   const state = NewsRollerStore.getState();
  //   if (state.leftIsRolling) {
  //     console.log("아무일없이 계속 돌림");
  //   } else {
  //     console.log("왼쪽을 멈춤");
  //   }
  // }

  // rightRolling() {
  //   const state = NewsRollerStore.getState();
  //   if (state.rightIsRolling) {
  //     console.log("아무일없이 계속 돌림");
  //   } else {
  //     console.log("오른쪽을 멈춤");
  //   }
  // }

  setEvent() {
    this.newsRoller;

    if (this.newsRoller !== null) {
      this.newsRoller.addEventListener("mouseover", (e: MouseEvent) => this.handleHeadlineEnter(e));
      // this.newsRoller.addEventListener("mouseout", (e: Event) => this.handleHeadlineLeave(e));
    }
    // if (rightHeadline !== null) {
    //   rightHeadline.addEventListener("mouseenter", (e: Event) => this.handleHeadlineEnter(e));
    //   rightHeadline.addEventListener("mouseleave", (e: Event) => this.handleHeadlineLeave(e));
    // }
  }

  handleHeadlineEnter(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const prevTarget = e.relatedTarget as HTMLElement;
    if (target.closest(".headline.left")) {
      console.log(target);
      console.log(prevTarget);
      AppDispatcher.dispatch(rollerActions.stopRolling("leftIsRolling"));
    }

    // if (target.classList.contains("left")) {
    //   console.log("왼쪽들어오고 디스패치");
    //
    //   // rollerActions.stopRolling("leftIsRolling") 부분이 결국 디스패쳐에서의 Action 타입을 반환해서 되는건가? 질문하기
    // } else if (target.classList.contains("right")) {
    //   console.log("오른쪽들어오고 디스패치");
    //   AppDispatcher.dispatch(rollerActions.stopRolling("rightIsRolling"));
    // }
  }

  // handleHeadlineLeave(e: Event) {
  //   const target = e.target as HTMLElement;
  //   console.log(target);
  //   console.log("나감");
  //   if (target.classList.contains("left")) {
  //     console.log("왼쪽나가고 디스패치");
  //     AppDispatcher.dispatch(rollerActions.resumeRolling("leftIsRolling"));
  //   } else if (target.classList.contains("right")) {
  //     console.log("오른쪽나가고 디스패치");
  //     AppDispatcher.dispatch(rollerActions.resumeRolling("rightIsRolling"));
  //   }
  // }

  createNewsRoller() {
    const newsRoller: HTMLElement = document.createElement("div");
    newsRoller.classList.add("news-roller");
    this.app?.appendChild(newsRoller);
    newsRoller.innerHTML = this.template();

    return newsRoller;
  }

  render() {
    if (this.newsRoller !== null) {
      this.newsRoller.innerHTML = this.template();
    }
  }

  template() {
    const state = NewsRollerStore.getState();
    const dataForLeft = state.leftHeadlineData;
    const dataForRight = state.rightHeadlineData;

    return `
      <div class="news-roller-left">
        <div class="press-name">연합뉴스</div>
        <div class="headline left">
          <div class="headline-container-left">
            ${dataForLeft
              .map((data: string, index: number) => {
                let count = index + 1;

                return `<div class="headline-item left" data=${count}>${data}</div>`;
              })
              .join("")}
          </div>
        </div>
      </div>
      <div class="news-roller-right">
        <div class="press-name">연합뉴스</div>
        <div class="headline right">
          <div class="headline-container-right">
            ${dataForRight
              .map((data: string, index: number) => {
                let count = index + 1;

                return `<div class="headline-item left" data=${count}>${data}</div>`;
              })
              .join("")}
          </div>
        </div>
      </div>

    `;
  }

  // startRolling() { 사용해야할 친구입니다
  //   if (this.containerLeft) {
  //     this.containerLeft.style.transition = "transform 1s";
  //   }
  //   setInterval(() => {
  //     if (this.containerLeft) {
  //       this.containerLeft.style.transform = `translateY(${-37 * this.currentIndex}px)`;
  //       this.currentIndex++;

  //       if (this.currentIndex === 5) {
  //         this.currentIndex = 0;
  //       }
  //     }
  //   }, 1500);
  // }
  // handleTransitionEnd() {
  //   if (this.containerLeft) {
  //     if (this.currentIndex === 5) {
  //       this.containerLeft.style.transition = "transform 0s";
  //     }
  //   }
  // }
}

// [속보] 쿤디, '돼지파스타 맛있어서 돼지된 것 같아...'
//[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 '이 맛 못끊어...'
