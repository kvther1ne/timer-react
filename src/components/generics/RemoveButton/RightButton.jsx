import "./RightButton.css";

function RightButton() {
  return (
    <>
      <div className="RightButton">
        <svg className="SvgCircleRight">
          {
            <polyline
              points="5,18 8,20 5,22 "
              fill="none"
              stroke="#484C4F"
              strokeWidth="0.5"
            />
          }
        </svg>
      </div>
    </>
  );
}

export default RightButton;
