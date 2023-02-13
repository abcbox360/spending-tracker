import styled from "styled-components";
import { buildMonths } from "./generator";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import StateContext from "../StateContext";
import { useContext } from "react";

const MonthPickerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 200px;
  left: 0;
  top: -200px;
  z-index: 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px black;
  transition: top 0.3s;
  ${props => props.transition && `
  top: 42px;
  `}

  @media screen and (min-width : 820px ) {
    height: 300px;
    top: -400px;
    font-size: 24px;
    ${props => props.transition && `
    top: 62px;
    `}
  }
`;

const MonthButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  ${(porps) =>
    porps.active &&
    `
background: #ffd700;
`}
& * {
  pointer-events: none;
}
`;

const Year = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background: white;
outline: 1px solid rgba(0, 0, 0, 0.2);
`

export default function MonthPicker(props) {
  const { transition } = props;
  const { year, setYear, month, setMonth } = useContext(StateContext);
  const months = buildMonths();
  const handleMonthClick = (e) => {
    if (e.target.id !== month) {
      setMonth(e.target.id);
    }
  };
  const hendleYearClick = (e) => {
    setYear(Number(year) + Number(e.target.id));
  };

  return (
    <MonthPickerContainer transition={transition}>
      <MonthButton id={-1} onClick={hendleYearClick}>
        <BsCaretLeft />
      </MonthButton>
      <Year>{year}年</Year>
      <MonthButton id={1} onClick={hendleYearClick}>
        <BsCaretRight />
      </MonthButton>
      {months.map((item) => (
        <MonthButton
          key={item.index}
          id={item.index}
          active={item.index === month}
          onClick={handleMonthClick}
        >
          {item.name}
        </MonthButton>
      ))}
    </MonthPickerContainer>
  );
}
