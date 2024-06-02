import "./TimerTitle.css";

function TimerTitle({duration}) {
  console.log(duration);
  return (
    <>
      <div className="TimerTitle">
        <div className="Time">05:00</div>
        <div className="TotalTime">{`${duration/1000} секунд`}</div>
      </div>
    </>
  );
}

export default TimerTitle;
