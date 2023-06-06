// import { getS, incS } from "../main";

// export function test() {
//   const test3 = Test3();
//   const app = document.querySelector("#app");
//   app!.innerHTML = `
//   <div class="test">test
//     ${test2()}
//   </div>
//   `;

//   app!.addEventListener("click", (e) => handleClick(e));

//   function handleClick(e: Event) {
//     console.log(e.target);
//     incS();
//     test3.render();
//   }
// }

// function test2() {
//   const test3 = Test3();
//   return `
//   <div class="test2">test2
//       ${test3.template()}
//   </div>
//   `;
// }
// function Test3() {
//   function template() {
//     const state = getS();
//     return `<div class="test3">test${state}</div>`;
//   }

//   function render() {
//     const test3 = document.querySelector(".test3");
//     test3!.innerHTML = template();
//   }
//   return { template, render };
// }
