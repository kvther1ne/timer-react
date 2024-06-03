import "./ExtendedTimer.css";
import CancelButton from "../../generics/Buttons/CancelButton/CancelButton.jsx"
import PauseReturnButton from "../../generics/Buttons/PauseReturnButton/PauseReturnButton.jsx";
import TimerCircle from "./TimerCircle.jsx";
import SettingButton from "../../generics/SettingButton/SettingButton.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ExtendedTimer() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const timers = useSelector((state) => state.timers.timers)

  const navigateToTimersPage = () => {
    navigate('/');
  };
  
  const remaining = timers[state.id].remaining / 1000
  const duration = timers[state.id].duration / 1000

  return (
    <div className="ExtendedTimer">
      <div className="TopPanel">
        <SettingButton label={"Таймеры"} onClick={navigateToTimersPage} />
      </div>

      <div className="TimerCircle">
        <TimerCircle id={state.id} circleWidth={160} radius={75} />
      </div>
      <div className="ButtonPanel">
        <CancelButton onClick={navigateToTimersPage}/>
        <PauseReturnButton id={state.id}/>
      </div>
    </div>
  );
}

export default ExtendedTimer;
