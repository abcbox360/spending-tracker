import styled from "styled-components";
import Pie from "../components/Pie";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import stateContext from "../components/StateContext";
import { CreateNewStates } from "../components/generator";
import MonthPicker from "../components/MonthPicker/MonthPicker";
import EditPage from "../pages/EditPage";
import format from "date-fns/format";
import ItemIcon from "../components/ItemIcon";

const HomepageContainer = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  left: 0;
  top: 0;
  padding: 0 10px;
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
  @media screen and (min-width: 820px) {
    font-size: 30px;
    margin-top: 30px;
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
  @media screen and (min-width: 820px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;

const PricePie = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: -30px auto 0 auto;
  z-index: 0;
  pointer-events: none;
  @media screen and (min-width: 820px) {
    max-width: 800px;
    margin: -140px auto 0 auto;
  }
`;

const MainContainer = styled.div`
  margin: 10px auto;
  @media screen and (min-width: 820px) {
    margin: -180px auto 0 auto;
  }
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
  @media screen and (min-width: 820px) {
    font-size: 26px;
  }
`;

const Item = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  & * {
    pointer-events: none;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 820px) {
    font-size: 24px;
  }
  ${(props) =>
    props.active &&
    `
    background: #FFECEC;
    &:hover {
      background: #FFECEC;
    }
  `}
`;

const IconName = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin: auto 5px;
  background: radial-gradient(at 40% 40%, #ffd700 5px, transparent 40%);
  font-size: 26px;
  @media screen and (min-width: 820px) {
    font-size: 40px;
  }
`;

const Name = styled.div`
  margin: auto 5px;
  @media screen and (min-width: 820px) {
    font-size: 26px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & * {
    margin: 0;
  }
  @media screen and (min-width: 820px) {
    font-size: 26px;
    left: 45%;
    top: 45%;
  }
`;

export default function Homepage() {
  const { states, year, month } = useContext(stateContext);
  const [showMonth, setShowMonth] = useState(false);
  const [transition, setTransition] = useState(false);
  const [monthFilter, setMonthFilter] = useState(true);
  const [editState, setEditState] = useState(false);
  const newState = CreateNewStates(states, year, month, monthFilter);
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
  if (newState) {
    for (let state of newState) {
      for (let data of state.data) {
        if (data.price > 0) {
          income += Number(data.price);
        } else if (data.price < 0) {
          expend += Number(data.price);
        }
      }
    }
  }
  return (
    <HomepageContainer>
      {editState && (
        <EditPage editState={editState} setEditState={setEditState} />
      )}
      <Header
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
        showMonth={showMonth}
        setShowMonth={setShowMonth}
        setTransition={setTransition}
        transition={transition}
      />
      {showMonth && <MonthPicker transition={transition} />}
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
          <p>${numberComma(income + expend)}</p>
        </Remaining>
        <Pie income={income} expend={expend} />
      </PricePie>
      <MainContainer>
        {newState.map((state) => (
          <Items key={state.date}>
            <ItemTitle>
              <p>{format(new Date(state.date), "yyyy年MM月dd日")}</p>
              <p>
                $
                {numberComma(
                  state.data.reduce((acc, crr) => acc + crr.price, 0)
                )}
              </p>
            </ItemTitle>
            {state.data.map((item) => (
              <Item
                key={item.localid}
                id={item.localid}
                active={Number(editState.localid) === Number(item.localid)}
                onClick={(e) => {
                  setEditState(
                    states.filter(
                      (state) => Number(state.localid) === Number(e.target.id)
                    )[0]
                  );
                }}
              >
                <IconName>
                  <Icon>{ItemIcon(item.name)}</Icon>
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
