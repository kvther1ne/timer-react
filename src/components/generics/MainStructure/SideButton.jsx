import "./SideButton.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer } from "../../../store/Timers/timerActions";

function SideButton(id) {
  const dispatch = useDispatch()
  const timers = useSelector((state) => state.timers.timers);

  const toggleOn = () => {
    if (!timers[id.id].active) dispatch(startTimer(id.id))
    else dispatch(stopTimer(id.id))
  }

  if (!timers[id.id].active) {
    return (<div className="SideButton" onClick={toggleOn}>
      <svg className="SvgCircle">
        <circle
          cx="50%"
          cy="50%"
          r="15"
          stroke="#29a354"
          strokeWidth="2"
          fill="none"
        />
        <polygon
          fill="#29a354"
          stroke="#29a354"
          strokeWidth="1"
          points="32,25 32,58 60,42"
          transform="translate(3 3) scale(0.4)"
        ></polygon>
      </svg>
    </div>)
  }

  if (timers[id.id].active) {
    return (<div className="SideButton" onClick={toggleOn}>
      <svg className="SvgCircle">
        <circle
          cx="50%"
          cy="50%"
          r="15"
          stroke="#f9891c"
          strokeWidth="2"
          fill="none"
        />
        <rect
          width="4"
          height="33"
          x="30"
          y="25"
          fill="#f9891c"
          transform="translate(3 3) scale(0.4)"
        />
        <rect
          width="4"
          height="33"
          x="50"
          y="25"
          fill="#f9891c"
          transform="translate(3 3) scale(0.4)"
        />
      </svg>
    </div>)
  }
}

export default SideButton;
