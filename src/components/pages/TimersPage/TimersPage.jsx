import "./TimersPage.css";
import SettingButton from "../../generics/SettingButton/SettingButton.jsx";
import AddButton from "../../generics/AddButton/AddButton.jsx";
import MainStructure from "../../generics/MainStructure/MainStructure.jsx";
import { toggleEdit } from "../../../store/UI/uiActions.js";
import { useDispatch, useSelector } from "react-redux";

function TimersPage() {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.ui.isEditing);
  
  const toggleEditMode = () => 
  {
    dispatch(toggleEdit());
  }
  
  return (
    <div className="TimersPage">
      <div className="TopPanel">
        <SettingButton label={(isEditing ? "Готово" : "Править")} onClick={toggleEditMode}/>
        <AddButton />
      </div>

      <div className="Body">
        <MainStructure />
      </div>
    </div>
  );
}

export default TimersPage;
