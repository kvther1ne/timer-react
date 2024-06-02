import { useState } from "react";
import Picker from "react-mobile-picker";
import "../TimerEditor/TimePicker.css";
import { useDispatch } from "react-redux";
import { changeMinutes, changeSeconds } from "../../../store/UI/uiActions";

const configureTimes = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result[i] = i;
  }
  return result;
};

const selections = {
  minutes: configureTimes(0, 59),
  testMin: ["мин"],
  seconds: configureTimes(0, 59),
  testSec: ["сек"],
};

function MyPicker() {
  const [pickerValue, setPickerValue] = useState({
    minutes: 0,
    seconds: 0,
  });

  const dispatch = useDispatch()
  
  dispatch(changeMinutes(pickerValue.minutes))
  dispatch(changeSeconds(pickerValue.seconds))

  return (
    <div className="TimePicker">
      <Picker value={pickerValue} onChange={setPickerValue} wheelMode="normal">
        {Object.keys(selections).map((name) => (
          <Picker.Column key={name} name={name}>
            {selections[name].map((option) => (
              <Picker.Item key={option} value={option}>
                {option}
              </Picker.Item>
            ))}

          </Picker.Column>
        ))}
      </Picker>
    </div>
  );
}

export default MyPicker;
