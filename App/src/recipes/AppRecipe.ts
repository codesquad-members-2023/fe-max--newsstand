import { Recipe } from "../core/Recipe";
import { HeaderRecipe } from "./HeaderRecipe";

export class AppRecipe extends Recipe {
  constructor() {
    super({
      tagName: "div",
      children: [new HeaderRecipe()],
    });
  }
}
