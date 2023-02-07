import styled from "styled-components";
import {useState} from "react"
import CreateHeader from "../components/CreateHeader";
import CreateBuyItems from "../components/CreateList"
import CreatePageBody from "../components/CreatePageBody"
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";

const CreateContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;


export default function CreateItemPage() {
  const [active, setActive] = useState({ name: "食物", icon: <IoFastFoodOutline size="30px" /> });
  return (
    <CreateContainer>
      <CreateHeader />
      <CreateBuyItems setActive={setActive} active={active} />
      <CreatePageBody active={active}/>
    </CreateContainer>
    
  );
}
