import styled from "styled-components";
import { selectedStyle } from "../InputDatePicker/minins";
import { defaultTheme } from "../../utils/themes";
const Theme = defaultTheme;

const button_base = styled.button`
  background: ${Theme.color_white};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color, background-color 0.1s;
  color: ${Theme.color_yellow};

  &:hover {
    background: ${Theme.color_yellow1};
    color: ${Theme.color_white};
  }
`;
const Button = styled(button_base)`
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 50%;
  font-size: 18px;

  ${(props) =>
    props.isToday &&
    `
 border: 0.1rem solid ${Theme.color_yellow};
 background: ${Theme.color_yellow2};
 `}

  ${(props) =>
    !props.isCurrentMonth &&
    `
 opacity: 0.5;
 `}

 ${selectedStyle}
`;



const Button2 = styled(button_base)`
  height: 100%;
  font-size: 18px;
  border-radius: 10px;
  ${selectedStyle}
`;

const Button3 = styled(button_base)`
  height: 100%;
  width: 25%;
  font-size: 18px;
  border-radius: 10px;
`;

const Button4 = styled(button_base)`
  height: 100%;
  width: 40%;
  font-size: 18px;
  border-radius: 10px;
`;

const Button5 = styled(button_base)`
width: 100%;
border-radius: 50%;
border: 1px solid ${Theme.color_black};
font-size: 20px;
color: black;
box-shadow: 1px 1px 3px black;
&:active {
  box-shadow: 0px 0px 1px black;
}
`;

const Button6 =styled(Button5)`
background: ${Theme.color_yellow1};
color: ${Theme.color_white};
box-shadow: 1px 1px 3px black;

&:hover {
  background: ${Theme.color_white};
  color: ${Theme.color_yellow1};
}
&:active {
  box-shadow: 0px 0px 1px black;
}
`

const Button7 =styled(Button5)`
border-radius: 30px;
background: ${Theme.color_red};
color: ${Theme.color_white};
box-shadow: 1px 1px 3px black;

&:hover {
  background: ${Theme.color_white};
  color: ${Theme.color_red};
}
&:active {
  box-shadow: 0px 0px 1px black;
}
`

const InputButton = styled.input`
  width: 80%;
  height: 30px;
  position: relative;
  text-align: center;
  border-radius: 10px;
  border: 1px solid;
  margin: 10px auto;
  left: 10%;
  background: #fff4b8;
  @media screen and (min-width : 820px ){
    height: 50px;
    font-size: 26px;
  }
`;

export { Button, Button2, Button3, Button4, Button5, Button6, Button7, InputButton };
