import styled from "styled-components";
import { useContext } from "react";
import StateContext from "./StateContext";
import { upDate } from "../Api";
import { defaultTheme } from "../utils/themes";
import { BsCloudArrowUp, BsCloudCheck } from "react-icons/bs";
const Theme = defaultTheme;

const UpdateButtonContainer = styled.div``;

const ButtonBody = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color, background-color 0.1s;
  background: ${Theme.color_yellow1};
  border-radius: 10px;
  border: 1px solid black;
  margin: 30px auto 0 auto;
  box-shadow: 1px 1px 3px black;
  font-size: 16px;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    box-shadow: 0px 0px 1px black;
  }
  @media screen and (min-width : 820px ){
    width: 180px;
    height: 70px;
    font-size: 26px;
    & *:nth-child(1) {
      font-size: 34px;
    }
  }
`;

const UpDataOkButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color, background-color 0.1s;
  font-size: 16px;
  background: ${Theme.color_yellow1};
  border-radius: 10px;
  border: 1px solid black;
  margin: 30px auto 0 auto;
  box-shadow: 0px 0px 1px black;
  filter: brightness(0.8);
  @media screen and (min-width : 820px ){
    width: 180px;
    height: 70px;
    font-size: 26px;
    & *:nth-child(1) {
      font-size: 34px;
    }
  }
`;

function UpdateButton(props) {
  const { states, email, setStates, setIsUpData, isUpData } =
    useContext(StateContext);
  return (
    <UpdateButtonContainer>
      {isUpData === 'true' ? (
        <UpDataOkButton>
          <BsCloudCheck />
          上傳完成
        </UpDataOkButton>
      ) : (
        <ButtonBody
          onClick={() => {
            upDate(states, email, setStates, setIsUpData);
            window.localStorage.setItem("isUpData", true);
          }}
        >
          <BsCloudArrowUp />
          上傳資料
        </ButtonBody>
      )}
    </UpdateButtonContainer>
  );
}

export default UpdateButton;
