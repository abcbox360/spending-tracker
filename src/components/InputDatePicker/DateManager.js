import DateContext from "./DateContext";
import { useState } from "react";
import dateToStr from "./date-extraction";
function DateManager(props) {
  const [state, setState] = useState({
    date: new Date(),
    textInput: dateToStr(new Date()),
  });
  function onSelectDate(e, date) {
    const nextState = {
      date,
      textInput: dateToStr(date),
    };
    setState(nextState);
    if (props.onChange) {
      props.onChange(e, nextState);
    }
  }
  return (
    <DateContext.Provider value={{ value: state, onSelectDate }}>
      {props.children}
    </DateContext.Provider>
  );
}

export default DateManager;
