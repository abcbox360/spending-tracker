import { buildYears } from "./generator";
import SelectButton from "./Buttons/SelectButton";

function YearPicker(props) {
  const { selectedYear } = props;
  const years = buildYears(selectedYear, 3);

  return <SelectButton>{{ options: years, main: selectedYear }}</SelectButton>;
}

export default YearPicker;
