import React, { useContext } from "react";
import { Card, CardContent } from "@material-ui/core";
import { AppContext } from "../ContextAPI/AppContext";
import Table from "./Table";
import "../assets/sideBar.css";
import LineGraph from "./LineGraph";
function SideBar() {
  const { tableData, casesType } = useContext(AppContext);
  return (
    <div>
      <Card className="side__bar">
        <CardContent>
          <div className="side_info">
            <h3>Live cases by country</h3>
            <h6>Updated every 10 minutes</h6>
            <Table countries={tableData} />

            <h3>Worldwide new {casesType}</h3>
            <LineGraph className="line_graph_style" casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SideBar;
