import "./TimerLine.css";
import TimerTitle from "./TimerTitle";
import SideButton from "./SideButton";
import store from "../../../store/store";
import React from "react";
import RemoveButton from "../RemoveButton/RemoveButton";
import RightButton from "../RemoveButton/RightButton";

function TimerLine({duration}) {
  const [isEditing, toggleEditing] = React.useState(false);

  store.subscribe(() => {
    toggleEditing(store.getState().ui.isEditing);
  });

  if (!isEditing) {
    return (
      <>
        <div className="TimerLine">
          <div className="Left">
            <div className="Time">
              <TimerTitle duration={duration}/>
            </div>
          </div>

          <div className="ButtonStart">
            <SideButton />
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
              <RemoveButton />
            </div>
            <div className="Time">
              <TimerTitle duration={duration}/>
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
