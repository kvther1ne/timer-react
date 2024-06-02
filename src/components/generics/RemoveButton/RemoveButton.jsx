import "./RemoveButton.css";

function RemoveButton() {
  return (
    <>
      <div className="RemoveButton">
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
