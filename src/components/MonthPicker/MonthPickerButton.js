import styled from "styled-components";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import StateContext from "../StateContext";
import { useContext } from "react";

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 2px 10px;
border-radius: 10px;

${props => props.transition && props.showMonth && `
background: black;
color: white;
`}
`


export default function MonthPickerButton(props) {
  const { year, month } = useContext(StateContext);
  const {showMonth, transition, handleClickSelectMonth} = props

  return (
    <ButtonContainer showMonth={showMonth} transition={transition} onClick={handleClickSelectMonth} >{year}年{month}月{showMonth && transition? <BsCaretDown />:<BsCaretUp />}</ButtonContainer>
  );
}
