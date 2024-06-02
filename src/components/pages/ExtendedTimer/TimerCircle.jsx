import "./TimerCircle.css";
import CentralTimer from "../../generics/CentralTimer/CentralTimes";

function TimerCircle({ percentage, circleWidth, radius }) {
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
        <div className="Test"><CentralTimer /></div>
      </div>
    </>
  );
}

export default TimerCircle;
