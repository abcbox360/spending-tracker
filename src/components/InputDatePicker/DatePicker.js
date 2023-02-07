import { buildWeeks, buildDayNames } from "./generator";
import getDate from "date-fns/getDate";
import { useMemo } from "react";
import { Button } from "../Buttons/Button";
import styled from "styled-components";
import dateFnsIsToday from "date-fns/isToday";
import getMonth from "date-fns/getMonth";
import isSameDay from "date-fns/isSameDay";

const CalendarTable = styled.table`
  position: relative;
  width: 100%;
`;

const CalendarHeader = styled.tr`
  &:after {
    content: "";
    border-bottom: 0.1rem solid rgba(0, 0, 0);
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
  }
`;

const CalendarRow = styled.tr`
  text-align: center;
  & td {
    width: 14%;
    height: 44.4px;
  }
`;

function DatePicker(props) {
  const { calendar, selectedDate, onSelectDate } = props;
  const { year, monthIndex } = calendar;
  const weeks = useMemo(() => buildWeeks(year, monthIndex), [year, monthIndex]);
  const dayNames = useMemo(() => buildDayNames(0), []);

  return (
    <div>
      <CalendarTable>
        <thead>
          <CalendarHeader>
            {dayNames.map((dayName, i) => (
              <th key={i}>{dayName}</th>
            ))}
          </CalendarHeader>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <CalendarRow key={i}>
              {week.map((day, j) => {
                const isToday = dateFnsIsToday(day);
                const isCurrentMonth = getMonth(day) === monthIndex;
                const isSelected = isSameDay(day, selectedDate);
                return (
                  <td key={j}>
                    <Button
                      isToday={isToday}
                      isCurrentMonth={isCurrentMonth}
                      isSelected={isSelected}
                      onClick={(e) => onSelectDate(e, day)}
                    >
                      {getDate(day)}
                    </Button>
                  </td>
                );
              })}
            </CalendarRow>
          ))}
        </tbody>
      </CalendarTable>
    </div>
  );
}

export default DatePicker;
