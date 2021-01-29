import React, { createContext, useState, useEffect } from "react";
import { WORLDWIDE_URL, COUNTRIES_URL } from "../helpers/constants";
import { sortData } from "../helpers/util";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.90764, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

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
          setMapCountries(data);
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
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
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
        mapCenter,
        mapZoom,
        mapCountries,
        casesType,
        setCasesType,
        setMapCountries,
        setMapZoom,
        setMapCenter,
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
