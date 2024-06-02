import "./AddButton.css"
import { useNavigate } from 'react-router-dom';

function AddButton() {

  const navigate = useNavigate();

  const navigateToTimerEditor = () => {
    navigate('/editor');
  };

  return (
    <>
      <input onClick={navigateToTimerEditor} type="button" className="AddButton" value="+"/>
    </>
  );
}

export default AddButton;