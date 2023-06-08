import { TagHelper } from "../core/TagHelper";

export const Grid = () => {
  const { div } = TagHelper;

  return div({ id: "grid" }, [
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
  ]);
};
