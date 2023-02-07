import { useContext, useEffect } from "react";
import DateContext from "./DateContext";
import { InputButton } from "../Buttons/Button";

function Input(props) {
  const { value } = useContext(DateContext);
  const { setDate } = props;
  
  useEffect(() => {
    if(setDate) {
    setDate(value.date);
    }
  }, [value]);

  return <InputButton value={value.textInput} readOnly="readOnly"></InputButton>;
}

export default Input;
