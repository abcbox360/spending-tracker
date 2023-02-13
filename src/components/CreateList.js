import styled from "styled-components";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineCar,
  AiOutlineStock,
} from "react-icons/ai";
import { BsHouseDoor, BsPhone, BsGift, BsCashCoin } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { RiMoneyDollarCircleLine, RiBankLine } from "react-icons/ri";
import { CiMoneyCheck1 } from "react-icons/ci";

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
  @media screen and (min-width : 820px ) {
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
    { name: "食物", icon: <IoFastFoodOutline /> },
    { name: "飲品", icon: <FiCoffee /> },
    { name: "點心", icon: <BiCookie /> },
    { name: "日用品", icon: <AiOutlineShoppingCart /> },
    { name: "交通", icon: <AiOutlineCar /> },
    { name: "房租", icon: <BsHouseDoor /> },
    { name: "醫療", icon: <FaRegHospital /> },
    { name: "娛樂", icon: <GrGamepad /> },
    { name: "電子產品", icon: <BsPhone /> },
    { name: "社交", icon: <IoPeopleOutline /> },
    { name: "禮物", icon: <BsGift /> },
    { name: "其他", icon: <AiOutlineAppstore /> },
  ];
  const incomeItems = [
    { name: "薪水", icon: <BsCashCoin /> },
    { name: "獎金", icon: <CiMoneyCheck1 /> },
    { name: "回饋", icon: <RiMoneyDollarCircleLine /> },
    { name: "股息", icon: <AiOutlineStock /> },
    { name: "投資", icon: <RiBankLine /> },
  ];
  const handleClick = (e) => {
    if (isExpend) {
      setActiveItem(...items.filter((item) => item.name === e.target.id));
    } else {
      setActiveItem(...incomeItems.filter((item) => item.name === e.target.id));
    }
  };
  return (
    <CreateBuyItems>
      {isExpend
        ? items.map((item) => (
            <Item
              key={item.name}
              $active={activeitem.name === item.name}
              id={item.name}
              onClick={handleClick}
            >
              {item.icon}
              <p>{item.name}</p>
            </Item>
          ))
        : incomeItems.map((item) => (
            <Item
              key={item.name}
              $active={activeitem.name === item.name}
              id={item.name}
              onClick={handleClick}
            >
              {item.icon}
              <p>{item.name}</p>
            </Item>
          ))}
    </CreateBuyItems>
  );
}
