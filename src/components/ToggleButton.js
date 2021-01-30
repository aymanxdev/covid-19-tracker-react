import React, { useContext } from "react";
import { AppContext } from "../ContextAPI/AppContext";
import "../App.css";
import "../assets/button.css";
function ToggleButton({ ...props }) {
  const { changeMode, darkMode } = useContext(AppContext);

  return (
    <div className={props.className}>
      <div className={`toggle-container ${darkMode && "dark-mode-body"}`}>
        <span style={{ color: darkMode ? "grey" : "#ffcc29" }}>🌞 </span>
        <span className="toggle">
          <input
            checked={darkMode}
            onChange={changeMode}
            id="checkbox"
            className="checkbox"
            type="checkbox"
          />
          <label htmlFor="checkbox" />
        </span>
        <span style={{ color: darkMode ? "slateblue" : "grey" }}>🌛</span>
      </div>

      {/* <Button
        className={`${darkMode && "toggle-button-dark"}`}
        onClick={changeMode}
      >
        mode
      </Button> */}
    </div>
  );
}

export default ToggleButton;
