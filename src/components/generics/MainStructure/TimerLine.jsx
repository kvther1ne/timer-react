import "./TimerLine.css";
import TimerTitle from "./TimerTitle";
import SideButton from "./SideButton";
import React from "react";
import RemoveButton from "../RemoveButton/RemoveButton";
import RightButton from "../RemoveButton/RightButton";
import { useSelector } from "react-redux";

function TimerLine({duration, id}) {
  const isEditing = useSelector((state) => state.ui.isEditing)

  if (!isEditing) {
    return (
      <>
        <div className="TimerLine">
          <div className="Left">
            <div className="Time">
              <TimerTitle id={id} duration={duration}/>
            </div>
          </div>

          <div className="ButtonStart">
            <SideButton id={id} />
          </div>
          <hr className="lineBetween"></hr>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="TimerLine">
          <div className="Left">
            <div className="Remove">
              <RemoveButton id={id}/>
            </div>
            <div className="Time">
              <TimerTitle id={id} duration={duration}/>
            </div>
          </div>
          <div className="Right">
            <RightButton />
          </div>
          <hr className="lineBetween"></hr>
        </div>
      </>
    );
  }
}

export default TimerLine;
