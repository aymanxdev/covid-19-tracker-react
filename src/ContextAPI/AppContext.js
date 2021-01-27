import React, { createContext, useState, useEffect } from "react";
import { WORLDWIDE_URL, COUNTRIES_URL } from "../helpers/constants";
import { sortData } from "../helpers/util";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(WORLDWIDE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    // async -> send a request, wait for it and do something

    const getCountriesData = async () => {
      await fetch(`${COUNTRIES_URL}`)
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //country name -  United Kingdom
            value: country.countryInfo.iso2, // country code : UK
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? WORLDWIDE_URL
        : `${COUNTRIES_URL}/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  console.log("Country info here >>>", countryInfo);

  return (
    <AppContext.Provider
      value={{
        onCountryChange,
        countries,
        country,
        countryInfo,
        tableData,
        setTableData,
        setCountries,
        setCountry,
        setCountryInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
