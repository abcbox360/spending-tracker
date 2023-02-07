import styled from "styled-components";
import InputDatePicker from "./InputDatePicker/InputDatePicker";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
import { Button5, Button6, Button7 } from "./Buttons/Button";

const CreatePageBodyContainer = styled.div`
  height: 100%;
  position: relative;
  background: #fff4b8;
  margin: 0 10px;
  display: flex;
  padding: 10px;
  justify-content: center;
`;

const LeftContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(3, 8.5vh);
  grid-template-rows: repeat(4, 8.5vh);
  column-gap: 3vh;
  row-gap: 2vh;
`;

const RightContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-rows: repeat(4, 8.5vh);
  grid-template-columns: 8.5vh;
  row-gap: 2vh;
  margin-left: 3vh;
  & *:nth-of-type(3) {
    grid-row: 3/5;
  }
`;

function InputButtons(props) {
  const array = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0", "."];
  const { price, setPrice ,handleOKClick } = props;
  const handleButtonClick = (e) => {
    switch (e.target.value) {
      case "AC":
        if (price !== "0") {
          setPrice("0");
        }
        break;
      case "←":
        if (price.length >= 2) {
          setPrice(price.slice(0, price.length - 1));
        } else {
          setPrice("0");
        }
        break;
      default:
        if (price === "0") {
          setPrice(e.target.value);
        } else {
          setPrice(price + e.target.value);
        }
        break;
    }
  };

  return (
    <CreatePageBodyContainer>
      <LeftContainer>
        {array.map((arr) => (
          <Button5 key={arr} value={arr} onClick={handleButtonClick}>
            {arr}
          </Button5>
        ))}
      </LeftContainer>
      <RightContainer>
        <Button6 onClick={handleButtonClick} value={"AC"}>
          AC
        </Button6>
        <Button6 onClick={handleButtonClick} value={"←"}>
          ←
        </Button6>
        <Button7 onClick={handleOKClick}>OK</Button7>
      </RightContainer>
    </CreatePageBodyContainer>
  );
}

export default InputButtons;
