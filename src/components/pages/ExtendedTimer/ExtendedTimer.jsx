import "./ExtendedTimer.css";
import PauseReturnButton from "../../generics/Buttons/CancelButton/CancelButton.jsx";
import CancelButton from "../../generics/Buttons/PauseReturnButton/PauseReturnButton.jsx";
import TimerCircle from "./TimerCircle.jsx";
import SettingButton from "../../generics/SettingButton/SettingButton.jsx";

function ExtendedTimer() {
  return (
    <div className="ExtendedTimer">
      <div className="TopPanel">
        <SettingButton label={"Таймеры"}/>
      </div>

      <div className="TimerCircle">
        <TimerCircle percentage={100} circleWidth={160} radius={75} />
      </div>
      <div className="ButtonPanel">
        <CancelButton />
        <PauseReturnButton />
      </div>
    </div>
  );
}

export default ExtendedTimer;
