import ViewLayout from "./ViewLayout";
import MonthPicker from "./MonthPicker";
import HeaderTitle from "./HeaderTitle";

function MonthYearView(props) {
  const {
    calendar,
    onSelectMonth,
    onTitleClick,
    onSelectMonthYear,
    onSelectDate,
    setShowPicker,
  } = props;
  const { monthIndex, year } = calendar;

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
        <MonthPicker selectedMonthIndex={monthIndex} onSelect={onSelectMonth} />
      }
      foorerElement={{
        onSelectDate,
        onSelectMonthYear,
        setShowPicker,
        onTitleClick,
      }}
    />
  );
}

export default MonthYearView;
