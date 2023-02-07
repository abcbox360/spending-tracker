import Picker from "./Picker";
import { useState } from "react";
import FocusManager from "./FocusManager";
import DateManager from "./DateManager";
import Input from "./Input";

function InputDatePicker(props) {
  const {setDate} = props
  const [showPicker, setShowPicker] = useState(false);
  const openPicker = () => {
    setShowPicker(true);
  };
  const closePicker = () => {
    setShowPicker(false);
  };
  function onFocus() {
    openPicker();
  }
  function onBlur() {
    closePicker();
  }
  return (
    <FocusManager onFocus={onFocus} onBlur={onBlur}>
      <DateManager onChange={props.onChange}>
        <Input setDate={setDate} />
        {showPicker && <Picker setShowPicker={setShowPicker} />}
      </DateManager>
    </FocusManager>
  );
}

export default InputDatePicker;
