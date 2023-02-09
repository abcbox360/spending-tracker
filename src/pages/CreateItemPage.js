import styled from "styled-components";
import {useState} from "react"
import CreateHeader from "../components/CreateHeader";
import CreateList from "../components/CreateList"
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
  const [isExpend, setIsExpend] = useState(true);
  return (
    <CreateContainer>
      <CreateHeader setIsExpend={setIsExpend} />
      <CreateList setActive={setActive} active={active} isExpend={isExpend} />
      <CreatePageBody active={active} isExpend={isExpend}/>
    </CreateContainer>
    
  );
}
