import styled from "styled-components";
import { useState } from "react";
import CreateHeader from "../components/CreateHeader";
import CreateList from "../components/CreateList";
import CreatePageBody from "../components/CreatePageBody";

const CreateContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;

export default function CreateItemPage() {
  const [activeitem, setActiveItem] = useState("食物");
  const [isExpend, setIsExpend] = useState(true);
  return (
    <CreateContainer>
      <CreateHeader setIsExpend={setIsExpend} />
      <CreateList
        setActiveItem={setActiveItem}
        activeitem={activeitem}
        isExpend={isExpend}
      />
      <CreatePageBody activeitem={activeitem} isExpend={isExpend} />
    </CreateContainer>
  );
}
