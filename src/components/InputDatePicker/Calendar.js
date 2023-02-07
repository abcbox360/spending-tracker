import DateView from "./DateView";
import styled from "styled-components";
import { useState } from "react";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import MonthYearView from "./MonthYearView";

const Picker = styled.div`
  position: fixed;
  top: calc(50% - 200px);
  left: calc((50% - 175px));
  z-index: 5;
  width: 350px;
  height: 380px;
  padding: 0;
  border: 0.1rem solid rgba(0, 0, 0);
  border-radius: 10px;
  background: #fff;
`;

function Calendar(props) {
  const { selectedDate, onSelectDate, setShowPicker } = props;
  const [isDateView, setIsDateView] = useState(true);
  const today = new Date();
  const initialCalendar = {
    year: getYear(today),
    monthIndex: getMonth(today),
  };
  const [calendar, setCalendar] = useState(initialCalendar);
  function onSelectMonth(selectedMonthIndex) {
    setCalendar({ ...calendar, monthIndex: selectedMonthIndex });
  }
  function onSelectYear(selectYear) {
    setCalendar({ ...calendar, year: selectYear });
  }
  const onSetView = setIsDateView.bind(null, !isDateView);

  return (
    <Picker tabIndex={0}>
      {isDateView ? (
        <DateView
          calendar={calendar}
          onSelectMonthYear={setCalendar}
          onTitleClick={onSetView}
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
          setShowPicker={setShowPicker}
        />
      ) : (
        <MonthYearView
          calendar={calendar}
          onSelectMonth={onSelectMonth}
          onTitleClick={onSetView}
          onSelectMonthYear={setCalendar}
          onSelectYear={onSelectYear}
          setShowPicker={setShowPicker}
          selectedDate={selectedDate}
        />
      )}
    </Picker>
  );
}

export default Calendar;
