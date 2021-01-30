import React, { useContext } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { AppContext } from "../ContextAPI/AppContext";
import { prettyPrintStat } from "../helpers/util";
import "../assets/header.css";
import SubCard from "./SubCard";

//import "../../src/App.css";

function Header() {
  const {
    onCountryChange,
    countries,
    country,
    countryInfo,
    setCasesType,
    casesType,
    darkMode,
  } = useContext(AppContext);

  const changeBG = () => {
    darkMode
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "#f5f6fa");
  };

  changeBG();

  return (
    <div>
      <div className="app__header">
        <h1 className={`${darkMode && "dark-mode--header"}`}>
          COVID-19 Tracker
        </h1>

        <FormControl
          className={`app__dropdown ${darkMode && "app__dropdown--dark "}`}
        >
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
        <SubCard
          darkMode={darkMode}
          key={country.id}
          onClick={(e) => setCasesType("cases")}
          title="Cases"
          active={casesType === "cases"}
          cases={prettyPrintStat(countryInfo.todayCases)}
          total={prettyPrintStat(countryInfo.cases)}
        />

        <SubCard
          darkMode={darkMode}
          key={country.id}
          onClick={(e) => setCasesType("recovered")}
          title="Recovered"
          color
          isGreen={casesType === "recovered"}
          active={casesType === "recovered"}
          cases={prettyPrintStat(countryInfo.todayRecovered)}
          total={prettyPrintStat(countryInfo.recovered)}
        />
        <SubCard
          darkMode={darkMode}
          key={country.id}
          onClick={(e) => setCasesType("deaths")}
          title="Deaths"
          dText
          isGray={casesType === "deaths"}
          active={casesType === "deaths"}
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={prettyPrintStat(countryInfo.deaths)}
        />
      </div>
    </div>
  );
}

export default Header;
