import { DateDisplay } from "../components/DateDisplay";
import { Recipe } from "../core/Recipe";
import logo from "/img/icon/logo.svg";

// <header>
//   <div class="inner">
//     <h1 class="logo">
//       <img src="./img/icon/logo.svg" alt="뉴스스탠드 아이콘" />
//       <span>뉴스스탠드</span>
//     </h1>
//     <p class="date">XXXX. XX. XX. X요일</p>
//   </div>

//   <ul class="rolling-bar">
//     <li>
//       <h2 class="blind">연합뉴스 헤드라인</h2>
//       <ul class="rolling">
//         <li>
//           <a class="outlet" href="">연합뉴스</a>
//           <a class="article" href=""
//             >[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출</a
//           >
//         </li>
//       </ul>
//     </li>
//     <li>
//       <h2 class="blind">연합뉴스 헤드라인</h2>
//       <ul class="rolling">
//         <li>
//           <a class="outlet" href="">연합뉴스</a>
//           <a class="article" href=""
//             >[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출</a
//           >
//         </li>
//       </ul>
//     </li>
//   </ul>
// </header>

class DateDisplayRecipe extends Recipe {
  constructor() {
    super({
      tagName: "p",
      textContent: "",
    });
  }

  cook() {
    const dateDisplay = new DateDisplay();
    dateDisplay.element.className = "date";
    dateDisplay.render();
    return dateDisplay;
  }
}

class LogoRecipe extends Recipe {
  constructor() {
    super({
      tagName: "h1",
      attrs: {
        class: "logo",
      },
    });
  }

  cook() {
    const component = super.cook();
    const img: HTMLElement = document.createElement("img");
    img.setAttribute("src", logo);
    img.setAttribute("alt", "뉴스스탠드 아이콘");
    component.element.append(img);

    const span = document.createElement("span");
    span.textContent = "뉴스스탠드";
    component.element.append(span);
    return component;
  }
}

class InnerRecipe extends Recipe {
  constructor() {
    super({
      attrs: { class: "inner" },
      children: [new LogoRecipe(), new DateDisplayRecipe()],
    });
  }
}

export class HeaderRecipe extends Recipe {
  constructor() {
    super({
      tagName: "header",
      children: [new InnerRecipe()],
    });
  }
}
