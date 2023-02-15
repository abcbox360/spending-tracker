import { useContext, useEffect } from "react";
import DateContext from "./DateContext";
import { InputButton } from "../Buttons/Button";

function Input(props) {
  const { value, onSelectDate } = useContext(DateContext);
  const { setDate, $edit } = props;
  useEffect(() => {
    if(setDate) {
    setDate(value.date);
    }
  }, [value]);
  useEffect(() => {
    if($edit) {
      onSelectDate("",new Date($edit.date));
    }
  }, []);

  return <InputButton $edit={$edit} value={value.textInput} readOnly="readOnly"></InputButton>;
}

export default Input;
