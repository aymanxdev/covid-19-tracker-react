import React, { useContext } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { AppContext } from "../ContextAPI/AppContext";

import "../assets/header.css";
import SubCard from "./SubCard";
import "../../src/App.css";

function Header() {
  const { onCountryChange, countries, country, countryInfo } = useContext(
    AppContext
  );

  return (
    <div>
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
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
          title="Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />

        <SubCard
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />

        <SubCard
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </div>
    </div>
  );
}

export default Header;
