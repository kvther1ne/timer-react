import "./TimersPage.css";
import SettingButton from "../../generics/SettingButton/SettingButton.jsx";
import AddButton from "../../generics/AddButton/AddButton.jsx";
import MainStructure from "../../generics/MainStructure/MainStructure.jsx";
import { toggleEdit } from "../../../store/UI/uiActions.js";
import { useDispatch } from "react-redux";

function TimersPage() {
  const dispatch = useDispatch();
  const toggleEditMode = () => 
  {
    dispatch(toggleEdit());
  }
  
  return (
    <div className="TimersPage">
      <div className="TopPanel">
        <SettingButton label={"Править"} onClick={toggleEditMode}/>
        <AddButton />
      </div>

      <div className="Body">
        <MainStructure />
      </div>
    </div>
  );
}

export default TimersPage;
