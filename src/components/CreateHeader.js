import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
margin: 0;
padding: 0;
height: 40px;
display: flex;
position: fixed;
justify-content: space-between;
align-items: center;
box-sizing: border-size;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
background: #FFF;
top: 0;
left: 0;
right: 0;
width: 100%;
z-index: 5;
box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
transition: width 5s;
`

const Icon = styled(Link)`
  margin: auto 15px;
  & * {
    font-size: 25px;
  }
`;



const Buttons = styled.div`
  width: 30%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  position: relative;
  
  
`;

const Div = styled.div`
  background-color: #FFD700;
  border-radius: 10px 0 0 10px;
  width:50%;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: background-color, border-radius,left 0.5s;
  ${(props) =>
    props.$active &&
    `
    background-color: #4DE680;
  border-radius: 0 10px 10px 0;
  left: 50%;
  transition: background-color, border-radius,left 0.5s
  `}
`

const Button = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  &:nth-of-type(2) {
    border-left: 1px solid black;
  }
  & * {
    margin: auto;
    font-family: Serif;
    font-weight: 900;
  }
`;
const Space = styled.div`
  width: 25px;
  height: 40px;
  margin: 15px;
`;

export default function CreateHeader(props) {
const [active, setActive] = useState(false)
const {setIsExpend} = props
const handleClick1 = () => {
  if (active) {
  setActive(false)
  setIsExpend(true)
  }
}
const handleClick2 = () => {
  if (!active) {
  setActive(true)
  setIsExpend(false)
  }
}
 
  return (
    <HeaderContainer >
      <Icon to="/">
        <BiArrowBack />
      </Icon>
      <Buttons>
        <Button onClick={handleClick1}>
          <p>支出</p>
        </Button>
        <Button onClick={handleClick2}>
          <p>收入</p>
        </Button>
        <Div $active={active} />
      </Buttons>
      <Space />
    </HeaderContainer>
  );
}
