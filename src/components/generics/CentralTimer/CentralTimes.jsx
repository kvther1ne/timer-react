import "./CentralTimer.css"
import { useSelector, } from "react-redux";

function CentralTimer(id) {


  const timers = useSelector((state) => state.timers.timers)

  const remaining = timers[id.id].remaining

  const minutes = Math.floor((remaining / 1000) / 60);
  const seconds = Math.floor((remaining / 1000) % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;


  return (
    <>
      <div className = "CentralTimer">{formattedTime}</div>
    </>
  );
}

export default CentralTimer;