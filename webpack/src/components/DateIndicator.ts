import { TagHelper } from "../core/TagHelper";
import { use } from "../core/dom/use";
import { invoke } from "../core/invoke";
import { DateTimeFormatOptions } from "../interfaces/DateTimeFormatOptions";

export const DateIndicator = ({ date }: { date: Date }) => {
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    second: "2-digit",
  };
  const { p } = TagHelper;

  return use(() => {
    const intervalId = window.setInterval(() => {
      invoke({
        type: "DateIndicate",
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []).render(
    p({ class: "date" }, [date.toLocaleDateString("ko-KR", options)])
  );
};
