import { DateDisplay } from "../components/DateDisplay";
import { RollingBar } from "../components/RollingBar";
import { Recipe } from "../core/Recipe";
import logo from "../images/icon/logo.svg";

class ArticleRecipe extends Recipe {
  constructor() {
    super({
      tagName: "a",
      attrs: {
        class: "article",
        href: "",
      },
    });
  }
}

class OutletRecipe extends Recipe {
  constructor() {
    super({
      tagName: "a",
      attrs: {
        class: "outlet",
        href: "https://www.yna.co.kr/",
      },
      textContent: "연합뉴스",
    });
  }
}

class RollingItemRecipe extends Recipe {
  constructor() {
    super({
      tagName: "li",
      children: [new OutletRecipe(), new ArticleRecipe()],
    });
  }
}

class RollingRecipe extends Recipe {
  constructor() {
    super({
      tagName: "ul",
      attrs: {
        class: "rolling",
      },
      children: [new RollingItemRecipe()],
    });
  }
}

class RollingBarRecipe extends Recipe {
  constructor() {
    super({
      tagName: "ul",
      attrs: {
        class: "rolling-bar",
      },
      children: [new RollingRecipe(), new RollingRecipe()],
    });
  }

  cook() {
    const temp = this.children;
    this.children = [];

    const rollingBar = super.cook(RollingBar);
    this.children = temp;

    this.children.forEach((child) => {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");
      h1.textContent = "연합뉴스 최신기사";
      h1.className = "blind";
      li.appendChild(h1);
      li.appendChild(child.cook().element);
      rollingBar.element.appendChild(li);
    });

    return rollingBar;
  }
}

class DateDisplayRecipe extends Recipe {
  constructor() {
    super({
      tagName: "p",
      textContent: "",
    });
  }

  cook() {
    const dateDisplay = new DateDisplay(this.tagName);
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
      tagName: "div",
      attrs: { class: "inner" },
      children: [new LogoRecipe(), new DateDisplayRecipe()],
    });
  }
}

export class HeaderRecipe extends Recipe {
  constructor() {
    super({
      tagName: "header",
      children: [new InnerRecipe(), new RollingBarRecipe()],
    });
  }
}
