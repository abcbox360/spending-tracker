import getDate from "date-fns/getDate";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import { Button4 } from "../Buttons/Button";
import styled from "styled-components";

const Footer = styled.div`
border-top: 0.1rem solid rgba(0, 0, 0);
display: flex;
padding: 5px;
height: 100%;
justify-content: space-between;
}
`;

function ViewLayoutFooter(props) {
  const { foorerElement } = props;
  const closePicker = () => {
    setShowPicker(false);
  };
  const { onSelectMonthYear, onSelectDate, setShowPicker, onTitleClick } =
    foorerElement;

  const selectToday = () => {
    if (onTitleClick) {
      onTitleClick();
      onSelectMonthYear({
        year: getYear(new Date()),
        monthIndex: getMonth(new Date()),
      });
    } else {
      onSelectDate(getDate(new Date()), new Date());
      onSelectMonthYear({
        year: getYear(new Date()),
        monthIndex: getMonth(new Date()),
      });
    }
  };

  if (onTitleClick) {
    return (
      <Footer>
        <Button4 onClick={selectToday}>本月</Button4>
        <Button4 onClick={closePicker}>關閉</Button4>
      </Footer>
    );
  } else {
    return (
      <Footer>
        <Button4 onClick={selectToday}>本日</Button4>
        <Button4 onClick={closePicker}>關閉</Button4>
      </Footer>
    );
  }
}

export default ViewLayoutFooter;
