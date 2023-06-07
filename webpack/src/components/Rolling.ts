import { TagHelper } from "../core/TagHelper";

export const Rolling = () => {
  const { ul, li, a } = TagHelper;
  return ul({ class: "rolling" }, [
    li([
      a({ class: "outlet", href: "" }, ["연합뉴스"]),
      a({ class: "article", href: "" }, [
        "[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출",
      ]),
    ]),
  ]);
};
