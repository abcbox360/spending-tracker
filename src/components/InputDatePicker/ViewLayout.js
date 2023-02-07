import styled from "styled-components";
import ViewLayoutFooter from "./ViewLayoutFooter";

const ViewLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const ViewLayoutHeader = styled.div`
  width: 100%;
`;
const ViewLayoutBody = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

function ViewLayout(props) {
  const { header, bodyElement, foorerElement } = props;
  return (
    <ViewLayoutContainer>
      <ViewLayoutHeader>{header}</ViewLayoutHeader>
      <ViewLayoutBody>{bodyElement}</ViewLayoutBody>
      <ViewLayoutFooter foorerElement={foorerElement}></ViewLayoutFooter>
    </ViewLayoutContainer>
  );
}

export default ViewLayout;
