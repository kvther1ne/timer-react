import "./TimerEditor.css";
import TimeScrollPicker from "./TimeScrollPicker.jsx"
import SettingButton from "../../generics/SettingButton/SettingButton.jsx";
import StartButton from "../../generics/Buttons/StartButton/StartButton.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTimer, tickTimer } from "../../../store/Timers/timerActions.js";
import { disableEdit, toggleEdit } from "../../../store/UI/uiActions.js";

function TimerEditor() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const minutes = useSelector((state) => state.ui.minutes);
  const seconds = useSelector((state) => state.ui.seconds);

  const agregateTime = (minutes, seconds) => {
    const resultSeconds = ((minutes * 60) + (seconds)) * 1000
    return resultSeconds
  }

  const navigateToTimersPage = () => {
    dispatch(disableEdit());
    navigate('/');
  };

  const navigateToExtendedTimer = (id) => {
    navigate('/extendedTimer', {state: id});
  };

  const handleAddTimer = () => {
    const id = `timer_${Date.now()}`
    const duration = agregateTime(minutes, seconds); // 10 seconds
    const onChange = () => { dispatch(tickTimer(id)) }
    const callback = () => { }
    dispatch(addTimer(id, duration, callback, onChange))
    navigateToExtendedTimer({id})
  };

  return (
    <div className="TimerEditor">
      <div className="TopPanel">
        <SettingButton label={"Отменить"} onClick={navigateToTimersPage} />
      </div>

      <div className="TimeScrollPicker">
        <TimeScrollPicker />
      </div>
      <div className="ButtonPanelCenter">
        <StartButton onClick={handleAddTimer} />
      </div>
    </div>
  );
}

export default TimerEditor;
