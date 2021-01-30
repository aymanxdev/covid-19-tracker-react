import React, { useContext } from "react";
import { Card, CardContent } from "@material-ui/core";
import { AppContext } from "../ContextAPI/AppContext";
import Table from "./Table";
import "../assets/sideBar.css";
import LineGraph from "./LineGraph";
import ToggleButton from "./ToggleButton";
import GitHubButton from "react-github-btn";
function SideBar() {
  const { tableData, casesType, darkMode } = useContext(AppContext);
  return (
    <div>
      <div className="top_bar">
        <GitHubButton
          href="https://github.com/aymanxdev"
          data-color-scheme={`${
            darkMode && "no-preference: dark; light: dark; dark: light;"
          }`}
          data-size="large"
          aria-label="Follow @aymanxdev on GitHub"
        >
          Follow @aymanxdev
        </GitHubButton>
        <ToggleButton className="toggle_button" />
      </div>
      <Card
        darkMode={darkMode}
        className={`side__bar ${darkMode && "dark-mode--sideBar"}`}
      >
        <CardContent>
          <div className={`side_info ${darkMode && "dark-mode--sideInfo"}`}>
            <h3>Live cases by country</h3>
            <h6>Updated every 10 minutes</h6>
            <Table darkMode={darkMode} countries={tableData} />

            <h3>Worldwide new {casesType}</h3>
            <LineGraph className="line_graph_style" casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SideBar;
