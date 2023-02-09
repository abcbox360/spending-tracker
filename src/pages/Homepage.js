import styled from "styled-components";
import Pie from "../components/Pie";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineCar,
  AiOutlineStock
} from "react-icons/ai";
import { BsHouseDoor, BsPhone, BsGift, BsCashCoin } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { RiMoneyDollarCircleLine, RiBankLine } from "react-icons/ri";
import { CiMoneyCheck1 } from "react-icons/ci";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import StateContext from "../components/StateContext";
import { CreateNewStates } from "../components/generator";
const HomepageContainer = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  left: 0;
  top: 0;
  padding:0 10px;
`;

const Total = styled.div`
  display: flex;
  top: 60px;
  left: 0;
  right: 0;
  position: absolute;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 600;
`;

const Expend = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & p:first-child {
    border-bottom: 4px dashed #ffd700;
  }
  & p {
    padding: 0;
    margin: 0;
  }
`;

const Income = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & p {
    padding: 0;
    margin: 0;
  }
  & p:first-child {
    border-bottom: 4px dashed #4de680;
  }
`;

const PricePie = styled.div`
position: relative;
  width: 100%;
  max-width: 500px;
  margin: -30px auto 0 auto;
`;

const MainContainer = styled.div`
  margin: 10px auto;
  max-width: 800px;
`;

const Items = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  &:first-of-type {
    margin-top: -70px;
  }
  &:not(first-pf-type) {
    margin-top: 10px;
  }
`;

const ItemTitle = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-weight: 900;

  & * {
    margin: 0;
  }
`;

const Item = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-of-type {
    border: none;
  }
  & * {
    pointer-events: none;
  }
  ${props => props.active && `
  background: #FFECEC
  `}
`;

const IconName = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  min-width: 20px;
  height: 100%;
  background: radial-gradient(at 40% 40%, #ffd700 5px, white 40%);
`;

const Name = styled.div`
  margin: 0 5px;
`;

const Price = styled.div`
  font-weight: 900;
`;
const Remaining = styled.div`
position: absolute;
z-index: 1;
left: 44%;
top: 44%;
font-size: 16px;
font-weight: 600;
& * {
  margin:0;
}
`

const DeleteButton = styled.button`
height: 40px;
width: 40px;
border: 1px solid black;
border-radius: 50%;
position: absolute;
background: #FF2D2D;
left: 85%;
max-left: 780px;
color: white;
font-size: 20px;
display: none;
${props => props.active && `
display: block;
pointer-events: auto;
`}

`
export default function Homepage() {
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
    {name: "薪水", icon: <BsCashCoin size="30px" />},
    {name: "獎金", icon: <CiMoneyCheck1 size="30px" />},
    {name: "回饋", icon: <RiMoneyDollarCircleLine size="30px" />},
    {name: "股息", icon: <AiOutlineStock size="30px" />},
    {name: "投資", icon: <RiBankLine size="30px" />}
  ];
  const { states, setStates, setIsUpData } = useContext(StateContext);
  const [active, setActive ] = useState(0)
  const newState = CreateNewStates(states);
  useEffect(() => {
    if (states !== null) {
      window.localStorage.setItem("states", JSON.stringify(states));
    }
  }, [states]);
  function numberComma(num) {
    let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(comma, ",");
  }
  let expend = 0;
  let income = 0;
  if (states) {
    for (let state of states) {
      if (state.price > 0) {
        income += Number(state.price);
      } else if (state.price < 0) {
        expend += Number(state.price);
      }
    }
  }
  const handleClickDelete = (e) => {
    setStates(states.filter((state) => Number(state.localid) !== Number(e.target.name)))
    setIsUpData(false)
    window.localStorage.setItem("isUpData", false)
  }
  return (
    <HomepageContainer>
      <Header />
      <Total>
        <Expend>
          <p>總支出</p>
          <p>${numberComma(expend * -1)}</p>
        </Expend>
        <Income>
          <p>總收入</p>
          <p>${numberComma(income)}</p>
        </Income>
      </Total>
      <PricePie>
        <Remaining>
          <p>總結餘</p>
          <p>${numberComma(income+expend)}</p>
        </Remaining>
        <Pie income={income} expend={expend} />
      </PricePie>
      <MainContainer>
        {newState.map((state) => (
          <Items key={state.date}>
            <ItemTitle>
              <p>{state.date}</p>
              <p>
                $
                {numberComma(
                  state.data.reduce((acc, crr) => acc + crr.price, 0)
                )}
              </p>
            </ItemTitle>
            {state.data.map((item) => (
              <Item key={item.localid} id={item.localid} active={active==item.localid} onClick={(e) => {active===e.target.id? setActive(0): setActive(e.target.id);}}>
                <IconName>
                  <Icon>
                    {items.filter((icon) => icon.name === item.name)[0].icon}
                  </Icon>
                  <Name>{item.content ? item.content : item.name}</Name>
                </IconName>
                <Price>${numberComma(item.price)}</Price>
                <DeleteButton active={active==item.localid} name={item.localid} onClick={handleClickDelete} >X</DeleteButton>
              </Item>
            ))}
          </Items>
        ))}
      </MainContainer>
    </HomepageContainer>
  );
}


