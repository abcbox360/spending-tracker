import setMonth from "date-fns/setMonth";
import format from "date-fns/format";

export function buildMonths() {
  const months = new Array(12)
    .fill(0)
    .map((_, i) => setMonth(new Date(0), i))
    .map((month, j) => ({ index: format(month, "MM"), name: format(month, "MM月")}));
  return months;
}