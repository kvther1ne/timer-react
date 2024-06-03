import "./RemoveButton.css";
import { useDispatch } from "react-redux";
import { removeTimer } from "../../../store/Timers/timerActions";

function RemoveButton(id) {
  const dispatch = useDispatch();

  const handleRemoveTimer = () => 
    {
      dispatch(removeTimer(id.id))
    }
  return (
    <>
      <div onClick={handleRemoveTimer} className="RemoveButton">
        <svg className="SvgCircle">
          <circle cx="50%" cy="50%" r="5" fill="#DD363C" />
          <rect
              width="0.5"
              height="4"
              x="20"
              y="-7"
              fill="white"
              transform="rotate(90)"
            />
        </svg>
      </div>
    </>
  );
}

export default RemoveButton;
