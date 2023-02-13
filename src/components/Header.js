import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import MonthPickerButton from "./MonthPicker/MonthPickerButton";
import LeftIndex from "./LeftIndex";
import LoginPage from "../pages/LoginPage";
import StateContext from "./StateContext";
import { useContext } from "react";
import useTransition from "./useTransition";

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
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
  @media screen and (min-width : 820px ) {
    height: 60px;
    font-size: 30px;
  }
`;

const Index = styled.div`
  margin: auto 0;
  width: 70px;
  padding: 0 15px;
  height: 40px;
  cursor: pointer;
  @media screen and (min-width : 820px ) {
    width: 110px;
    height: 60px;
    padding: 0 25px;
    margin: auto 0;
  }
`;

const IndexFig = styled.div`
  width: 30%;
  height: 5%;
  margin-top: 14%;
  border-radius: 5px;
  background: rgb(0, 0, 0);
  &:nth-of-type(2n) {
    width: 20%;
    margin-top: 10%;
  }
  &:nth-of-type(3) {
    width: 10%;
    margin-top: 10%;
  }

`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
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
  cursor: pointer;
  ${(props) =>
    props.active &&
    `
    color: #fff;
    border-radius: 10px;
  background-color: #000;
  `}

  &:first-of-type {
    margin-right: 5px;
  }
  
  @media screen and (min-width : 820px ) {
    font-size: 24px;
    width: 60px;
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
    height: 99%;
    width: 99%;
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
  @media screen and (min-width : 820px ) {
    height: 72px;
    width: 72px;
    left: calc(50% - 35px);
  }
`;

const BackButton = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  border: none;
`;

export default function Header(props) {
  const {
    showMonth,
    transition,
    setShowMonth,
    setTransition,
    monthFilter,
    setMonthFilter,
  } = props;
  const [show, setShow] = useState(false);
  const [tran, setTran] = useState(false);
  const { login } = useContext(StateContext);
  const x = useRef(1);
  const y = useRef(1);
  function handleClick() {
    if (!show) {
      setShow(!show);
      x.current = 2;
    } else if (tran) {
      setTran(!tran);
      x.current = 3;
    }
  }
  useTransition(x, setShow, setTran);

  function handleClickSelectMonth() {
    if (!showMonth) {
      setShowMonth(!showMonth);
      y.current = 2;
    } else if (transition) {
      setTransition(!transition);
      y.current = 3;
    }
  }
  useTransition(y, setShowMonth, setTransition);

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
        <MonthPickerButton
          transition={transition}
          showMonth={showMonth}
          handleClickSelectMonth={handleClickSelectMonth}
        />
        <Nav>
          <LinkButton active={monthFilter} onClick={() => setMonthFilter(true)}>月</LinkButton>
          <LinkButton active={!monthFilter} onClick={() => setMonthFilter(false)}>全部</LinkButton>
        </Nav>
      </HeaderTop>
      <CreateItemButton to="Create">
        <div />
        <div />
        <div />
      </CreateItemButton>
      {login && <LoginPage />}
    </HeaderContainer>
  );
}
