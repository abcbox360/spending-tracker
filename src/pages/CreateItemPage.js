import styled from "styled-components";
import {useState} from "react"
import CreateHeader from "../components/CreateHeader";
import CreateList from "../components/CreateList"
import CreatePageBody from "../components/CreatePageBody"
import { IoFastFoodOutline } from "react-icons/io5";

const CreateContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;


export default function CreateItemPage() {
  const [activeitem, setActiveItem] = useState({ name: "食物", icon: <IoFastFoodOutline size="30px" /> });
  const [isExpend, setIsExpend] = useState(true);
  return (
    <CreateContainer>
      <CreateHeader setIsExpend={setIsExpend} />
      <CreateList setActiveItem={setActiveItem} activeitem={activeitem} isExpend={isExpend} />
      <CreatePageBody activeitem={activeitem} isExpend={isExpend}/>
    </CreateContainer>
    
  );
}
