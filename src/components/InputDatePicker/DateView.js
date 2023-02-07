import ViewLayout from "./ViewLayout";
import DatePicker from "./DatePicker";
import HeaderTitle from "./HeaderTitle";

function DateView(props) {
  const {
    calendar,
    onSelectMonthYear,
    onTitleClick,
    selectedDate,
    onSelectDate,
    setShowPicker,
  } = props;
  const { year, monthIndex } = calendar;
  return (
    <ViewLayout
      header={
        <HeaderTitle
          onSelectMonthYear={onSelectMonthYear}
          monthIndex={monthIndex}
          year={year}
          onTitleClick={onTitleClick}
        />
      }
      bodyElement={
        <DatePicker
          calendar={calendar}
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
        />
      }
      foorerElement={{ onSelectDate, onSelectMonthYear, setShowPicker }}
    />
  );
}

export default DateView;
