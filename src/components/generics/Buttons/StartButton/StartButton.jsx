import "../Button.css"
import "./StartButton.css"

function StartButton({onClick}) {
  return (
    <>
      <input onClick={onClick} type="button" value="Старт" className="Button StartButton"/>
    </>
  );
}

export default StartButton;