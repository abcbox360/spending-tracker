import styled from "styled-components";
import ProfileInfo from "../components/ProfileInfo";
import { GrClose } from "react-icons/gr";
import { BsCloudy, BsJournalText, BsCheck2 } from "react-icons/bs";
import stateContext from "../components/StateContext";
import { useContext, useState } from "react";
import { upDate } from "../Api";

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 6;
`;

const WhiltBack = styled.div`
  width: 350px;
  height: 450px;
  position: fixed;
  border: 1px solid black;
  top: calc(50vh - 225px);
  left: calc(50vw - 175px);
  border-radius: 20px;
  background: white;
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;

const Return = styled.div`
  margin: auto;
  font-size: 24px;
`;

const Text = styled.div`
  padding: 5px 14px;
  border-top: 1px solid black;
`;

const All = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: cneter;
  margin-top: 10px;
`;

const Left = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 100px;
  width: 100px;
  margin: auto 0;
  border-radius: 20px;
  background: white;
  box-shadow: 1px 1px 5px black;
  & p:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    font-size: 14px;
    margin: 0;
    margin-bottom: 5px;
  }
  & p:last-child {
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }
  ${(props) =>
    props.active &&
    `
border: 3px solid #30C562;
box-shadow: 1px 1px 5px #30C562;
`}
`;

const Right = styled(Left)`
  ${(props) =>
    props.active &&
    `
border: 3px solid #ECCB13;
box-shadow: 1px 1px 5px #ECCB13;
`}
`;

const OkButton = styled.button`
  height: 30px;
  width: 30px;
  position: absolute;
  border: none;
  background: none;
  left: calc(50% - 23px);
`;

export default function LoginPage() {
  const {
    login,
    states,
    setLogin,
    setToken,
    token,
    setStates,
    email,
    setIsUpData,
  } = useContext(stateContext);
  const [active, setActive] = useState("");
  const hendleOkClick = () => {
    if (active === "local") {
      window.localStorage.setItem("token", token);
      upDate(states, email, setStates, setIsUpData);
      setLogin("");
    } else if (active === "cloud") window.localStorage.setItem("token", token);
    setIsUpData("true");
    setStates(login);
    setLogin("");
  };
  return (
    <LoginPageContainer>
      <WhiltBack>
        <Title>
          <Return
            onClick={() => {
              setLogin("");
              setToken("");
            }}
          >
            <GrClose />
          </Return>
        </Title>
        <ProfileInfo />
        <Text>您曾經使用此帳號登入過，請選擇要保留哪份紀錄?</Text>
        <All>
          <Left active={active === "local"} onClick={() => setActive("local")}>
            <p>本地資料</p>
            <BsJournalText />
            <p>{states?states.filter(prop=>prop.localid !== -1).length:0}筆紀錄</p>
          </Left>
          <Right active={active === "cloud"} onClick={() => setActive("cloud")}>
            <p>雲端資料</p>
            <BsCloudy />
            <p>{login.length ? login.length : 0}筆紀錄</p>
          </Right>
        </All>
        <OkButton onClick={hendleOkClick}>
          <BsCheck2 size="35px" />
        </OkButton>
      </WhiltBack>
    </LoginPageContainer>
  );
}
