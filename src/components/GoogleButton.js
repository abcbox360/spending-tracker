import styled from "styled-components";
import { useGoogleLogin } from '@react-oauth/google';
import { useContext} from "react"
import {getToken} from "../Api"
import StateContext from "./StateContext";
import { defaultTheme } from "../utils/themes";
import { FcGoogle } from "react-icons/fc";
const Theme = defaultTheme;

const GoogleLoginButton = styled.button`
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
transition: color, background-color 0.1s;
font-size: 16px;
background: ${Theme.color_yellow1};
border-radius: 10px;
border: 1px solid black;
margin: 80px auto 0 auto;
box-shadow: 1px 1px 3px black;
&:hover {
  filter: brightness(0.8)
}
&:active {
  box-shadow: 0px 0px 1px black;
}
& *:nth-child(1) {
  margin:  0 10px 0 0;
  padding: 0;
}
`

const GoogleLogoutButton = styled(GoogleLoginButton)`
margin: 20px auto 0 auto;
`

function GoogleButton () {
  const { setToken, token, setEmail } = useContext(StateContext);
  const login = useGoogleLogin({
    onSuccess: codeResponse => {getToken(codeResponse.code).then(data=> {setToken(data.id_token); window.localStorage.setItem("token", data.id_token)})},
    flow: 'auth-code',
  });

  const logout = () => {
    setToken(false)
    setEmail("")
    window.localStorage.setItem("token", "")
  }
  if(!token) {
  return <GoogleLoginButton onClick={() => login()}><FcGoogle size="28px"/>登入</GoogleLoginButton>
  }else {
    return <GoogleLogoutButton onClick={() => logout()}><FcGoogle/>登出</GoogleLogoutButton>
  }

}

export default GoogleButton