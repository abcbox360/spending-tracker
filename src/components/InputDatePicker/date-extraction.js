import format from "date-fns/format";

export default function dateToStr(date) {
  return format(date, "yyyy年MM月dd日");
}
