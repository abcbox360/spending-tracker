import styled from "styled-components";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineCar,
} from "react-icons/ai";
import { BsHouseDoor, BsPhone, BsGift } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";

const CreateBuyItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 1fr);
  row-gap: 3vh;
  margin: 70px auto 5% auto;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
const Item = styled.button`
  width: 10vh;
  height: 6vh;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(at 40% 20%, #808080 1px, white 20%);
  margin: 0;
  cursor: pointer;
  position: relative;
  transition: background 1s;
  ${(props) =>
    props.$active &&
    `
    background: radial-gradient(at 40% 20%, #FFD700 1px, white 20%);
  `}
  & * {
    pointer-events: none;
  }
`;

export default function CreateList(props) {
  const { active, setActive } = props;
  const items = [
    { name: "食物", icon: <IoFastFoodOutline size="30px" /> },
    { name: "飲品", icon: <FiCoffee size="30px" /> },
    { name: "點心", icon: <BiCookie size="30px" /> },
    { name: "日用品", icon: <AiOutlineShoppingCart size="30px" /> },
    { name: "交通", icon: <AiOutlineCar size="30px" /> },
    { name: "房租", icon: <BsHouseDoor size="30px" /> },
    { name: "醫療", icon: <FaRegHospital size="30px" /> },
    { name: "娛樂", icon: <GrGamepad size="30px" /> },
    { name: "電子產品", icon: <BsPhone size="30px" /> },
    { name: "社交", icon: <IoPeopleOutline size="30px" /> },
    { name: "禮物", icon: <BsGift size="30px" /> },
    { name: "其他", icon: <AiOutlineAppstore size="30px" /> },
  ];
  const handleClick = (e) => {
    setActive(...items.filter((item) => item.name === e.target.id));
  };

  return (
    <CreateBuyItems>
      {items.map((item) => (
        <Item
          key={item.name}
          $active={active.name === item.name}
          id={item.name}
          onClick={handleClick}
        >
          {item.icon}
          {item.name}
        </Item>
      ))}
    </CreateBuyItems>
  );
}
