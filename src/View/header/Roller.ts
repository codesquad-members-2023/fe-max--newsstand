// import { AppDispatcher } from "../../../Intent/AppDispatcher";
// import { NewsRollerStore } from "../../../Model/NewsRollerStore";

import { RollerIntent } from "../../Intent/RollerIntent";
import { RollerModel } from "../../Model/RollerModel";

export class Roller {
  containerLeft: HTMLElement | null;
  containerRight: HTMLElement | null;
  model: RollerModel;
  intent: RollerIntent;
  constructor(model: RollerModel, intent: RollerIntent) {
    this.model = model;
    this.intent = intent;
    this.containerLeft = document.querySelector(".headline-container-left");
    this.containerRight = document.querySelector(".headline-container-right");
    console.log(model.state.headlines);
  }
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

// [속보] 쿤디, '돼지파스타 맛있어서 돼지된 것 같아...'
//[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 '이 맛 못끊어...'
