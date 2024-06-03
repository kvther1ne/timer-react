import "./MainStructure.css";
import TimerLine from "./TimerLine";
import { useSelector, useDispatch } from 'react-redux';
import { addTimer, startTimer, stopTimer, resetTimer, removeTimer } from '../../../store/Timers/timerActions';

function MainStructure() {
  const timers = useSelector((state) => state.timers.timers);

  return (
    <>
      <div className="MainStructure">
        <div className="title">Таймеры</div>
        <hr className="line"></hr>
        {Object.keys(timers).map((id) => (
          <TimerLine key={id} id={id} duration={timers[id].duration}/>
        ))}
      </div>
    </>
  );
}

export default MainStructure;
