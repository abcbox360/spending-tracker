import styled from "styled-components";
import CreatePageBody from "../components/CreatePageBody";

const EditPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 6;
`;

const EditContainer = styled.div`
  width: 350px;
  height: 450px;
  position: fixed;
  border: 1px solid black;
  top: calc(50vh - 225px);
  left: calc(50vw - 175px);
  border-radius: 20px;
  background: white;
  box-shadow: 1px 1px 5px black;
`;

const ReturnButton = styled.button`
  position: relative;
  top: 20px;
  left: calc(50% - 50px);
  width: 100px;
  height: 50px;
  border-radius: 30px;
  background: black;
  color: white;
  box-shadow: 1px 1px 3px black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background: white;
    color: black;
  }
`;

export default function EditPage(props) {
  const { editState, setEditState } = props;

  return (
    <EditPageContainer>
      <EditContainer>
        <CreatePageBody
          isExpend={editState.price > 0 ? false : true}
          activeitem={editState.item}
          $edit={editState}
          setEditState={setEditState}
        />
        <ReturnButton onClick={() => setEditState(false)}>返回</ReturnButton>
      </EditContainer>
    </EditPageContainer>
  );
}
