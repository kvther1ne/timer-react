import "../Button.css"
import "./CancelButton.css"

function CancelButton({onClick}) {
  return (
    <>
      <input type="button" onClick={onClick} value="Отмена" className="Button CancelButton"/>
    </>
  );
}

export default CancelButton;
