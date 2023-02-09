import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import InputDatePicker from "./InputDatePicker/InputDatePicker";
import LeftIndex from "./LeftIndex";
const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const HeaderTop = styled.div`
  height: 40px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-size;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const Index = styled.div`
  margin: auto 15px;
`;

const IndexFig = styled.div`
  width: 20px;
  height: 3px;
  margin: 4px;
  border-radius: 5px;
  background: rgb(0, 0, 0);
  &:nth-of-type(2n) {
    width: 15px;
  }
  &:nth-of-type(3) {
    width: 10px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkButton = styled.div`
  color: black;
  text-align: center;
  corsur: pointer;
  width: 40px;
  padding: 2px;
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  ${(props) =>
    props.$active &&
    `
    color: #fff;
    border-radius: 10px;
  background-color: #000;
  `}

  &:first-of-type {
    margin-right: 5px;
  }
`;

const CreateItemButton = styled(Link)`
  position: fixed;
  height: 52px;
  width: 52px;
  bottom: 10%;
  z-index: 1;
  left: calc(50% - 25px);

  &:hover *:nth-child(1) {
    filter: brightness(0.5);
  }

  & *:nth-child(1) {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    background: #ff9797;
  }

  & *:nth-child(2) {
    background: #fff;
    position: absolute;
    top: 45%;
    left: 15%;
    width: 70%;
    height: 10%;
    border-radius: 5px;
  }

  & *:nth-child(3) {
    background: #fff;
    position: absolute;
    top: 15%;
    left: 45%;
    width: 10%;
    height: 70%;
    border-radius: 5px;
  }
`;

const BackButton = styled.button`
position: fixed;
width: 100vw;
height: 100vh;
z-index: 2;
background:rgba(0, 0, 0, 0.2);
border: none;

`

export default function Header() {
  const [show, setShow] = useState(false);
  const [tran, setTran] = useState(false);
  const x = useRef(1);
  function handleClick() {
    if (!show) {
      setShow(!show);
      x.current = 2;
    }
   else if (tran) {
      setTran(!tran);
      x.current = 3;
    }
  }
  useEffect(() => {
    if (x.current >= 2) {
      if (show) {
        if (x.current === 2) {
          setTran(!tran);
        } else {
          setTimeout(() => setShow(!show), 300);
        }
      }
    }
    x.current = 1;
  }, [show, tran]);
  return (
    <HeaderContainer>
      {show && <LeftIndex tran={tran} setTran={setTran} x={x} />}
      {show && tran && <BackButton onClick={handleClick} />}
      <HeaderTop>
        <Index onClick={handleClick}>
          <IndexFig />
          <IndexFig />
          <IndexFig />
        </Index>
        <InputDatePicker></InputDatePicker>
        <Nav>
          <LinkButton $active>月</LinkButton>
          <LinkButton>日</LinkButton>
        </Nav>
      </HeaderTop>
      <CreateItemButton to="Create">
        <div />
        <div />
        <div />
      </CreateItemButton>
    </HeaderContainer>
  );
}
