import "../Button.css"
import "./PauseReturnButton.css"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer } from "../../../../store/Timers/timerActions"

function PauseReturnButton({ id }) {
  const dispatch = useDispatch()
  const timers = useSelector((state) => state.timers.timers);

  console.log(id)

  const toggleOn = () => {
    if (!timers[id].active) dispatch(startTimer(id))
    else dispatch(stopTimer(id))
  }

  if (!timers[id].active) {
    return (
      <>
        <input type="button" onClick={toggleOn} value="Старт" className="Button PauseReturnButton" />
      </>
    );
  }

  if (timers[id].active) {
    return (
      <>
        <input type="button" onClick={toggleOn} value="Пауза" className="Button PauseReturnButton" />
      </>
    );
  }

}

export default PauseReturnButton;
