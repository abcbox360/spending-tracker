import styled from "styled-components";
import HomePage from "../pages/HomePage";
import CreateItemPage from "../pages/CreateItemPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import DataManager from "./DataManager";
import LoginPage from "../pages/LoginPage";

const Root = styled.div``;

function App(props) {
  return (
    <Root>
      <DataManager onChange={props.onChange}>
        <HashRouter> 
          <Routes>
            <Route exact path="*" element={<HomePage />} />
            <Route exact path="Create" element={<CreateItemPage />} />
            <Route exact path="Login" element={<LoginPage />} />
          </Routes>
        </HashRouter>
      </DataManager>
    </Root>
  );
}

export default App;
