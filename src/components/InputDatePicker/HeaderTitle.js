import { Button2, Button3 } from "../Buttons/Button";
import format from "date-fns/format";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function modulo(m, n) {
  return ((m % n) + n) % n;
}

function HeaderTitle(props) {
  const { year, monthIndex, onTitleClick, onSelectMonthYear } = props;
  const fistDayOfMonth = new Date(year, monthIndex);
  const monthLabel = format(fistDayOfMonth, "MM") + "月";
  const yearLabel = format(fistDayOfMonth, "yyyy") + "年";

  function changeMonthYear(increment) {
    const nextMonthIndex = modulo(monthIndex + increment, 12);
    const nextYear = year + Math.floor((monthIndex + increment) / 12);
    onSelectMonthYear({
      year: nextYear,
      monthIndex: nextMonthIndex,
    });
  }
  const goToPreviousMonth = changeMonthYear.bind(null, -1);
  const goToNextMonth = changeMonthYear.bind(null, 1);

  return (
    <HeaderTitleContainer>
      <Button3 onClick={goToPreviousMonth}>
        <AiOutlineLeft size="30%" />
      </Button3>
      <Button2 onClick={onTitleClick}>
        {yearLabel} {monthLabel}
      </Button2>
      <Button3 onClick={goToNextMonth}>
        <AiOutlineRight size="30%" />
      </Button3>
    </HeaderTitleContainer>
  );
}

export default HeaderTitle;
