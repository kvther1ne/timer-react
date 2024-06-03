import { resetTimer } from "../../../store/Timers/timerActions";
import "./TimerTitle.css";
import { useSelector, useDispatch } from "react-redux";

function TimerTitle({duration, key, id}) {
  const dispatch = useDispatch()

  const timers = useSelector((state) => state.timers.timers)

  const remaining = timers[id].remaining

  const minutes = Math.floor((remaining / 1000) / 60);
  const seconds = Math.floor((remaining / 1000) % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

  if(remaining <= 0) dispatch(resetTimer(id))

  return (
    <>
      <div className="TimerTitle">
        <div className="Time">{`${formattedTime}`}</div>
        <div className="TotalTime">{`${duration/1000} секунд`}</div>
      </div>
    </>
  );
}

export default TimerTitle;
