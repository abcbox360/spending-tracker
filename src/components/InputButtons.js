import styled from "styled-components";
import { Button5, Button6, Button7, Button8 } from "./Buttons/Button";

const CreatePageBodyContainer = styled.div`
  position: relative;
  background: #fff4b8;
  margin: 0 10px;
  display: flex;
  padding: 10px;
  justify-content: center;
  @media screen and (min-width: 820px) {
    padding: 0 5px;
    margin: 0 30px;
    & * {
      font-size: 26px;
    }
    ${(props) =>
      props.$edit &&
      `
  border-radius: 0 0 20px 20px;
  padding: 10px;
  margin: 0 10px;
  & * {
    font-size: 20px;
  }
`}
  }
  ${(props) =>
    props.$edit &&
    `
  border-radius: 0 0 20px 20px;
`}
`;

const LeftContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(3, 8.5vh);
  grid-template-rows: repeat(4, 8.5vh);
  column-gap: 3vh;
  row-gap: 2vh;
  ${(props) =>
    props.$edit &&
    `
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(4, 70px);
  column-gap: 10px;
  row-gap: 10px;
`}
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
  ${(props) =>
    props.$edit &&
    `
  grid-template-rows: repeat(4, 70px);
  grid-template-columns: 70px;
  column-gap: 10px;
  row-gap: 10px;
  margin-left: 10px;
  & *:nth-of-type(3) {
    grid-row: 3/4;
  }
`}
`;

function InputButtons(props) {
  const array = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0", "."];
  const { $edit, price, setPrice, handleOKClick, handleClickDelete } = props;
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
    <CreatePageBodyContainer $edit={$edit}>
      <LeftContainer $edit={$edit}>
        {array.map((arr) => (
          <Button5 key={arr} value={arr} onClick={handleButtonClick}>
            {arr}
          </Button5>
        ))}
      </LeftContainer>
      <RightContainer $edit={$edit}>
        <Button6 onClick={handleButtonClick} value={"AC"}>
          AC
        </Button6>
        <Button6 onClick={handleButtonClick} value={"←"}>
          ←
        </Button6>
        {$edit && <Button8 color="green" onClick={handleOKClick}>保存</Button8>}
        {$edit && <Button8 onClick={handleClickDelete}>刪除</Button8>}
        {!$edit && <Button7 onClick={handleOKClick}>OK</Button7>}
      </RightContainer>
    </CreatePageBodyContainer>
  );
}

export default InputButtons;
