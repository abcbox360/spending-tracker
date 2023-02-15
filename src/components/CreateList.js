import styled from "styled-components";
import ItemIcon from "../components/ItemIcon";

const CreateBuyItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 1fr);
  margin: 70px auto 5% auto;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
const Item = styled.button`
  width: 10vh;
  height: 9vh;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(at 40% 40%, #808080 1px, white 20%);
  margin: 0;
  cursor: pointer;
  position: relative;
  transition: background 1s;
  ${(props) =>
    props.$active &&
    `
    background: radial-gradient(at 40% 40%, #FFD700 1px, white 20%);
  `}
  & * {
    font-size: 30px;
    pointer-events: none;
  }
  & p {
    margin: 0;
    font-size: 12px;
  }
  @media screen and (min-width: 820px) {
    & * {
      font-size: 40px;
    }
    & p {
      font-size: 26px;
    }
  }
`;

export default function CreateList(props) {
  const { activeitem, setActiveItem, isExpend } = props;
  const items = [
    "食物",
    "飲品",
    "點心",
    "交通",
    "房租",
    "醫療",
    "娛樂",
    "電子產品",
    "社交",
    "禮物",
    "其他",
  ];
  const incomeItems = ["薪水", "獎金", "回饋", "股息", "投資"];
  const handleClick = (e) => {
    if (isExpend) {
      setActiveItem(...items.filter((item) => item === e.target.id));
    } else {
      setActiveItem(...incomeItems.filter((item) => item === e.target.id));
    }
  };
  return (
    <CreateBuyItems>
      {isExpend
        ? items.map((item) => (
            <Item
              key={item}
              $active={activeitem === item}
              id={item}
              onClick={handleClick}
            >
              {ItemIcon(item)}
              <p>{item}</p>
            </Item>
          ))
        : incomeItems.map((item) => (
            <Item
              key={item}
              $active={activeitem === item}
              id={item}
              onClick={handleClick}
            >
              {ItemIcon(item)}
              <p>{item}</p>
            </Item>
          ))}
    </CreateBuyItems>
  );
}
