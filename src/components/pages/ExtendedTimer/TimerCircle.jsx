import "./TimerCircle.css";
import CentralTimer from "../../generics/CentralTimer/CentralTimes";
import { useSelector, useDispatch } from "react-redux";
import { resetTimer } from "../../../store/Timers/timerActions";

function TimerCircle({ id, circleWidth, radius }) {
  const dispatch = useDispatch()
  const timers = useSelector((state) => state.timers.timers)

  const remaining = timers[id].remaining
  const duration = timers[id].duration

  if(remaining <= 0) dispatch(resetTimer(id))

  const percentage = (remaining * 100) / duration

  console.log(duration)
  console.log(remaining)
  console.log(percentage)

  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <>
      <div className="Timer">
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            r={radius}
            className="svg-indicator-indication"
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          ></circle>
        </svg>
        <div className="Test"><CentralTimer id={id} /></div>
      </div>
    </>
  );
}

export default TimerCircle;
