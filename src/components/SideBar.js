import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { AppContext } from "../ContextAPI/AppContext";
import Table from "./Table";
import "../assets/sideBar.css";
function SideBar() {
  const {
    tableData,
    onCountryChange,
    countries,
    country,
    countryInfo,
  } = useContext(AppContext);
  return (
    <div>
      <Card>
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData} />

          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default SideBar;
