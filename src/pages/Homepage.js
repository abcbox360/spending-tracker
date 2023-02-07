import styled from "styled-components";
import Pie from "../components/Pie";
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
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import StateContext from "../components/StateContext";
import { CreateNewStates } from "../components/generator";
const HomepageContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
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
  margin-right: 10px;
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
  width: 100%;
  max-width: 500px;
  margin: -30px auto 0 auto;
`;

const MainContainer = styled.div`
  margin: 10px;
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
`;

const IconName = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
min-width: 20px;
height: 100%;
background: radial-gradient(at 40% 40%, #FFD700 5px, white 40%);
`;

const Name = styled.div`
  margin: 0 5px;
`;

const Price = styled.div`
  font-weight: 900;
`;

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
  ];
  const { states } = useContext(StateContext);
  const newState = CreateNewStates(states);
  useEffect(()=>{
    if(states !== null){
    window.localStorage.setItem("states",JSON.stringify(states));
    }
  },[states])
  function  numberComma(num){
    let comma=/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
    return num.toString().replace(comma, ',')
  }


  return (
    <HomepageContainer>
      <Header />
      <Total>
        <Expend>
          <p>總支出</p>
          <p>$1000</p>
        </Expend>
        <Income>
          <p>總收入</p>
          <p>$1000</p>
        </Income>
      </Total>
      <PricePie>
        <Pie />
      </PricePie>
      <MainContainer>
        {newState.map((state) => (
          <Items key={state.date}>
            <ItemTitle>
              <p>{state.date}</p>
              <p>${numberComma(state.data.reduce((acc, crr) => acc + crr.price, 0))}</p>
            </ItemTitle>
            {state.data.map((item) => (
              <Item key={item.id}>
                <IconName>
                  <Icon>
                    {items.filter((icon) => icon.name === item.name)[0].icon}
                  </Icon>
                  <Name>{item.content ? item.content : item.name}</Name>
                </IconName>
                <Price>${numberComma(item.price)}</Price>
              </Item>
            ))}
          </Items>
        ))}
      </MainContainer>
    </HomepageContainer>
  );
}

/*
{
  if(acc.date === state.date) {
    return 'a' +state.data
  }else{
    return 'b' +state.data
}}

*/
