import styled from "styled-components";
import InputDatePicker from "./InputDatePicker/InputDatePicker";
import InputButtons from "./InputButtons";
import { useState, useContext } from "react";
import StateContext from "./StateContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AddState } from "./generator";
import ItemIcon from "../components/ItemIcon";

const CreatePageBodyContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid black;
  border-radius: 20px 20px 0 0;
  background: #ffd700;
  ${(props) =>
    props.$edit &&
    `
position: relative;
top: 0;
height: 100%;
border-radius: 20px;
border: none;
`}
`;

const TextContainer = styled.div`
  height: 10vh;
  background: #fff4b8;
  margin: 0 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 820px) {
    padding: 0 5px;
    margin: 0 30px;
    ${(props) =>
      props.$edit &&
      `
    height: 50px;
    margin: 0 10px;
  `}
  }
  ${(props) =>
    props.$edit &&
    `
  height: 50px;
  margin: 0 10px;
`}
`;

const Icon = styled.div`
  width: 75px;
  height: 100%;
  border: none;
  margin: auto 0 auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & * {
    font-size: 30px;
  }
  & p {
    padding: 0;
    margin: 0;
    font-size: 13px;
  }
  @media screen and (min-width: 820px) {
    width: 122px;
    & * {
      font-size: 40px;
    }
    & p {
      font-size: 24px;
    }
    ${(props) =>
      props.$edit &&
      `
  width: 75px;
  & * {
    font-size: 30px;
  }
  & p {
    padding: 0;
    margin: 0;
    font-size: 13px;
  }
`}
  }
`;

const Text = styled.input`
  width: 100%;
  height: 80%;
  margin: auto 10px auto 10px;
  border: none;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff4b8;
  font-size: 3vh;
  &:focus-visible {
    outline: 4px dashed #ffd700;
    border: none;
  }
  ${(props) =>
    props.$edit &&
    `
  font-size: 20px;
`}
`;

const Price = styled.p`
  font-weight: 900;
  margin-right: 10px;
  font-size: 3vh;
  ${(props) =>
    props.$edit &&
    `
  font-size: 20px;
  margin: auto 10px auto 0;
`}
`;

function CreatePageBody(props) {
  const [price, setPrice] = useState("0");
  const { $edit, setEditState, activeitem, isExpend } = props;
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const { states, setStates, setIsUpData } = useContext(StateContext);
  const navigate = useNavigate();
  useEffect(() => {
    if ($edit) {
      setText($edit.content);
      setDate(new Date($edit.date));
      if (isExpend) {
        setPrice($edit.price.slice(1, $edit.price.length));
      } else {
        setPrice($edit.price);
      }
    }
  }, [$edit]);

  function handleOKClick() {
    AddState(states, setStates, activeitem, text, date, isExpend, price, $edit);
    setIsUpData(false);
    window.localStorage.setItem("isUpData", false);
    setPrice("0");
    setText("");
    navigate("/", { replace: true });
    if ($edit) {
      setEditState(false);
    }
  }
  const handleClickDelete = () => {
    const item = states.map((state) => {
      if (Number(state.localid) === Number($edit.localid)) {
        return { ...state, localid: -1 };
      } else {
        return state;
      }
    });
    setStates(item);
    setEditState(false);
    setIsUpData(false);
    window.localStorage.setItem("isUpData", false);
  };
  return (
    <CreatePageBodyContainer $edit={$edit}>
      <InputDatePicker setDate={setDate} $edit={$edit} />
      <TextContainer $edit={$edit}>
        <Icon $edit={$edit}>
          {ItemIcon(activeitem)}
          <p>{activeitem}</p>
        </Icon>
        <Text
          $edit={$edit}
          type="text"
          placeholder={"在此輸入備註"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Price $edit={$edit}>${price}</Price>
      </TextContainer>
      <InputButtons
        handleClickDelete={handleClickDelete}
        setPrice={setPrice}
        price={price}
        handleOKClick={handleOKClick}
        $edit={$edit}
      />
    </CreatePageBodyContainer>
  );
}

export default CreatePageBody;
