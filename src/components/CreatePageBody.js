import styled from "styled-components";
import InputDatePicker from "./InputDatePicker/InputDatePicker";
import InputButtons from "./InputButtons";
import { useState, useContext } from "react";
import StateContext from "./StateContext";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";

const CreatePageBodyContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  border-top: 1px solid black;
  border-radius: 10px 10px 0 0;
  background: #ffd700;
`;

const TextContainer = styled.div`
  height: 10vh;
  background: #fff4b8;
  margin: 0 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 42px;
  height: 100%;
  border: none;
  margin: auto 0 auto 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    padding: 0;
    margin: 0;
    font-size: 15px;
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
`;

const Price = styled.p`
  font-weight: 900;
  margin-right: 10px;
  font-size: 3vh;
`;

function CreatePageBody(props) {
  const [price, setPrice] = useState("0");
  const { active, isExpend } = props;
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const { states, setStates, isUpData, setIsUpData } = useContext(StateContext);
  const navigate = useNavigate();
  function handleOKClick() {
    if (states) {
      setStates(
        [
          ...states,
          {
            id: 0,
            localid: Number(states.sort((a, b) => a.localid - b.localid)[states.length - 1].localid) + 1,
            date: format(date, "yyyy年MM月dd日"),
            item: active.name,
            content: text,
            price: isExpend ? "-" + price : price,
          },
        ].sort((a, b) => (a.date < b.date ? 1 : -1))
      );
    } else {
      setStates([
        {
          id: 0,
          localid: 1,
          date: format(date, "yyyy年MM月dd日"),
          item: active.name,
          content: text,
          price: isExpend ? "-" + price : price,
        },
      ]);
    }
    setIsUpData(false)
    window.localStorage.setItem("isUpData", false)
    setPrice("0");
    setText("");
    navigate("/", { replace: true });
  }
  return (
    <CreatePageBodyContainer>
      <InputDatePicker setDate={setDate} />
      <TextContainer>
        <Icon>
          {active.icon}
          <p>{active.name}</p>
        </Icon>
        <Text
          type="text"
          placeholder={"在此輸入備註"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Price>${price}</Price>
      </TextContainer>
      <InputButtons
        setPrice={setPrice}
        price={price}
        handleOKClick={handleOKClick}
      />
    </CreatePageBodyContainer>
  );
}

export default CreatePageBody;
