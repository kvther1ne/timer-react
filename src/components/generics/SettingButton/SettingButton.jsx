import React from "react";
import "./SettingButton.css";

function SettingButton({label, onClick})
{
  return (
    <input
      type="button"
      value={label}
      className="SettingButton"
      onClick={onClick}
    />
  );
}

export default SettingButton;
