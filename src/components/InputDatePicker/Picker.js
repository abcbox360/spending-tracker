import Calendar from "./Calendar";
import { useContext } from "react";
import DateContext from "./DateContext";

function Picker(props) {
  const { value, onSelectDate } = useContext(DateContext);
  const { setShowPicker } = props;
  return (
    <Calendar
      setShowPicker={setShowPicker}
      selectedDate={value.date}
      onSelectDate={onSelectDate}
    />
  );
}

export default Picker;
