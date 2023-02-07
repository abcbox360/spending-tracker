import styled from "styled-components";
import HomePage from "../pages/Homepage";
import CreateItemPage from "../pages/CreateItemPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import DataManager from "./DataManager";

const Root = styled.div``;

const LeftIndex = styled.div``;

function App(props) {
  return (
    <Root>
      <DataManager onChange={props.onChange}>
        <HashRouter> 
          <Routes>
            <Route exact path="*" element={<HomePage />} />
            <Route exact path="Create" element={<CreateItemPage />} />
          </Routes>
        </HashRouter>
      </DataManager>
    </Root>
  );
}

export default App;
