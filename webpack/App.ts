import { Header } from "./src/components/Header";
import { TagHelper } from "./src/core/TagHelper";

export const App = ({ date }: { date: Date }) => {
  const { div } = TagHelper;
  return div({ class: "container" }, [Header({date})]);
};
