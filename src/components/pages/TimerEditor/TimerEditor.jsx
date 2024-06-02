import "./TimerEditor.css";
import TimeScrollPicker from "./TimeScrollPicker.jsx"
import SettingButton from "../../generics/SettingButton/SettingButton.jsx";
import StartButton from "../../generics/Buttons/StartButton/StartButton.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTimer } from "../../../store/Timers/timerActions.js";

function ExtendedTimer() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const minutes = useSelector((state) => state.ui.minutes);
  const seconds = useSelector((state) => state.ui.seconds);

  const agregateTime = (minutes, seconds) => 
  {
      const resultSeconds = ((minutes * 60) + (seconds)) * 1000
      return resultSeconds
  }

  const navigateToTimersPage = () => {
    navigate('/');
  };

  const handleAddTimer = () => {
    const id = `timer_${Date.now()}`;
    const duration = agregateTime(minutes, seconds); // 10 seconds
    const callback = () => alert(`Timer ${id} finished!`);
    dispatch(addTimer(id, duration, callback));
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
        <StartButton onClick={handleAddTimer}/>
      </div>
    </div>
  );
}

export default ExtendedTimer;
