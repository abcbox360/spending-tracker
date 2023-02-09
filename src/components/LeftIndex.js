import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import GoogleButton from "./GoogleButton"
import ProfileInfo from "./ProfileInfo"
import { useContext} from "react"
import StateContext from "./StateContext";
import UpdateButton from "./UpdateButton"
import LoginPage from "../pages/LoginPage";


const LeftIndexContainer = styled.div`
  position: fixed;
  width: 30vh;
  height: 100%;
  background: white;
  z-index: 3;
  left: -40vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-right: 1px solid black;
  transition: left 0.3s;
  
 ${prpos=> prpos.tran && `
 left: 0vh;
 `}
`;

const Back = styled.div`
width: 80%;
height: calc(100vh - 120px);
border-radius: 20px;
margin: 20px auto 20px auto;
border: 1px solid black;
`



function LeftIndex(props) {
const {tran} = props
const { token } = useContext(StateContext);
return (
    <LeftIndexContainer tran={tran}>
      <Back>
        <GoogleOAuthProvider clientId="111973812560-s5oceri31fpb5ivg27cuikieja3jhamd.apps.googleusercontent.com">
      {token && <ProfileInfo/>}
      {token && <UpdateButton />}
      <GoogleButton />
        </GoogleOAuthProvider>
        </Back>
        <LoginPage />
    </LeftIndexContainer>
  );
}

export default LeftIndex;
